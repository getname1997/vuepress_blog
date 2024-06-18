# ts学习
### 基础类型
```ts
// type
type age = number

// 接口
interface ind{
    a:string
}
// typeof 获取 一个变量或者 对象中的类型
const a = {
    da:'das'
}
type a = typeof a
const c:a = {
    da: 'dd'
}
// 类
class Greeter {
    greeting: string;
    //constructor 构造器 初始化自动执行
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

// 枚举
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// 泛型
function identity<T>(arg: T): T {
    return arg;
}
```

### Pick 获取对应的接口类信息
``` ts
  //pick:从已经定义的属性中获取自己要的拿一组
  // extends 继承 keyof 获取接口类型的建！
  interface Todo {
    title: string
    description: string
    completed: boolean
  }
   type pick<T, V extends keyof T> = {
        [t in V]:T[t]
   }
```
### Readonly 只读一组接口类型    readonly  只读一个数据, 对应数据禁止改动
```ts
type Readonly<T> = {
    readonly [u in keyof T]:t[u]
}
```

### TupleToObject 元组转成对象
```ts
type TupleToObject<T extends readonly any[]> = {
     [u in  T[number]]: u
}
```
### First  获取第一个类型
```ts
type First<T extends any[]> = T extends never[] ? never:T[0]
```
### Length 获取元组长度
```ts
  type Length<T extends readonly any[]> = T['length']
```
### Exclude 剔除所选项
```ts
type MyExclude<T, U> = T extends U? never: T
```
### infer 推断返回的类型
```ts
  /*用于提取函数类型的返回值类型*/
```

### 获取Promise 返回值

```ts
/* 看看参是不是Promise 是的拿参重新解析 直到为普通类型  */
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T
```

### IF 类型

 ```ts
    type If<C extends boolean,T, F>=C extends true? T:F

  type A = If<true, 'a', 'b'>  // expected to be 'a'
  type B = If<false, 'a', 'b'> // expected to be 'b'
  ```

###  Concat  合并

```ts
type Concat<T extends any[],U extends any[]>= [...T,...U]
type Result = Concat<[1], [2]> 

```
### Includes 是否在

```ts
   type Includes<T extends any[],U> = U extends T ?true:false

//type Includes<T extends readonly any[], U> = T extends [infer R, ...infer S] ? Equal<R, U> extends true ? true : Includes<S, U> : false;
type cases = [
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
    Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
    Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
    Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
    Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
    Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
    Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
    Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
    Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
    Expect<Equal<Includes<[1], 1 | 2>, false>>,
    Expect<Equal<Includes<[1 | 2], 1>, false>>,
    Expect<Equal<Includes<[null], undefined>, false>>,
    Expect<Equal<Includes<[undefined], null>, false>>,
]

```
### push 添加
```ts
type Push<T extends any[], U> =  [...T,U]
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

### Unshift 前面添加
```ts
type Unshift<T extends any[], U> = [U,...T]
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```

### Parameters 获取函数参数类型

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (... ary:infer R)=> any ? R : never

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}
  type a  = MyParameters<typeof baz>
```
