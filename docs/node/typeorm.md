# typeOrm 操作
## 使用

### 引入
```ts
// 引入依赖 以及类型
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
        
// 声明类型 并且使用typeOrm的依赖注入
export class PostsService {
    constructor(
        // 注入！！！
        @InjectRepository(PostsEntity)
        private readonly postsRepository: Repository<PostsEntity>,
    ) {
    }
}

```
### 普通查询 (findOne,find)
```ts
    const doc = await this.postsRepository.findOne({ where: { title } });
    const existPost = await this.postsRepository.findOne({where: { id: blogId },});
    const allViewedPhotos = await this.postsRepository.find({where: { id: blogId }});                         

```

### 带有关联的查询
```ts
    const doc = await this.postsRepository.findOne({ where: { title }, relations: ['user'] });
    const existPost = await this.postsRepository.findOne({where: { id: blogId }, relations: ['user']});
    const allViewedPhotos = await this.postsRepository.find({where: { id: blogId }, relations: ['user']});                         

```

### 使用createQueryBuilder查询
```ts
/* getOne 获取单个 getMany 获取多个 实体 */
/* getRawOne    getRawMany  非实体 */
/*LIKE 模糊匹配*/
    const allViewedPhotos = await this.postsRepository
      .createQueryBuilder('posts')
      .where('posts.title LIKE :title')
      .setParameters({ title: `%${data.title}%` })
      .andWhere('posts.author LIKE :author')
      .setParameters({ author: `%${data.author}%` })
      .getMany();


```


