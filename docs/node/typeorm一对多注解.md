# typeorm 一对多，多对一 多对多 一对一 对应实体之间的关系

### OneToMany 一对多
``` ts
 import {
  OneToMany,
} from 'typeorm';
import { PostsEntity } from 'src/posts/entities/posts.entity';
  @OneToMany(() => PostsEntity, (post) => post.author)
  posts: PostsEntity[];
```

###  ManyToOne 多对一
``` ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Question } from "./Question";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => Question, question => question.categories)
  questions: Question[];
}
```
