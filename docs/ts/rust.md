# rust 
✨ 🐛 ⚡🎫  ♤ ♧ ♡ ♢ ♪ ♬ ♭ ✔ ✘ ♞ ♟ ↪ ↣ ♚ ♛ ♝ ☞ ☜ ⇔ ☆ ★ □ ■ ○ ● △ ▲ ▽ ▼ ◇ ◆ ♀ ♂ ※ ↓ ↑ ↔ ↖ ↙ ↗ ↘ ← → ♣ ♠ ♥ ◎ ◣ ◢ ◤ ◥ 卍 ℡ ⊙ ㊣ ® © ™ ㈱ 囍
```rust
// #[derive(Debug)]  // 调试模式 
/* 依赖 rand = "0.6.0 "*/
use rand::Rng; //trait
use std::io; //trait //prelude  // 获取命令行输入
use std::cmp::Ordering;
fn main() {
    println!("猜数游戏");
    let mut rngs = rand::thread_rng().gen_range(1,100);
    println!("神秘数字: {}",rngs);
    loop {
        println!("猜一个数");
        let mut gress =  String::new();
        io::stdin().read_line(&mut gress).expect("无法读取");
        let gress:u32 = match gress.trim().parse(){
            Ok(num)=>num,
            Err(err) => continue,
        };
        println!("你猜的数: {}",gress);
        match gress.cmp(&rngs) {
            Ordering::Less => println!("小了"),
            Ordering::Greater => println!("大了"),
            Ordering::Equal=>{
                println!("猜中了");
                break
            }
        }
    }
}
```
