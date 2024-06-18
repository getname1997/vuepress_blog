## 任务调度

### 第一步下载依赖

```shell

[//]: # (yarn add  @nestjs/schedule 依赖 cron)
  yarn add  @nestjs/schedule

  yarn add -D @types/cron
```

### 第二步引入依赖 并且初始化

```typescript
// @@filename(app.module) 
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})

```

### 第三步创建任务

```typescript
// @@filename(XXX.service) 你的sevice文件 
import { Injectable } from "@nestjs/common";

import { Cron, Interval, Timeout, NestSchedule } from "nest-schedule";

@Injectable()
export class ScheduleService extends NestSchedule {
  @Cron("0 0 0 * * *")
  async cronJob() {
    console.log("每天0点执行一次");
  }
}
```
#### cron表达式

| \* \* \* \* \* \*   | 每秒执行                          |
|---------------------| --------------------------------- |
| 45 \* \* \* \* \*   | 每分钟第 45 秒执行                |
| * 10 * \* \* \*     | 每小时的第 10 分钟执行            |
| 0 */30 9-17 * \* \* | 每天 9-17 点 每 30 分钟执行一次   |
| 0 30 11 \* \* 1-5   | 每周星期一到星期五 11.30 执行一次 |

### 第四步引入任务

```typescript
// @@filename(XXX.model) sevice对应的模块文件 一般已经引入过了 
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleService } from './schedule.service';

@Module({
  controllers: [],
  providers: [ScheduleService],
})

```
