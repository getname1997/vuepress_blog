## 新建类 定义

~~~python
class NewClass:
    """一个简单的类实例"""
    num = 123456
    def f(self):
        return 'hello ShowMeAI'
    # 实例化类
x = NewClass()
# 访问类的属性和方法
print("NewClass 类的属性 num 为：", x.num)
print("NewClass 类的方法 f 输出为：", x.f())
    
    
~~~

### 构造函数 __init__ self指向实例

~~~python
class MyComplex:
    def __init__(self, real_part, imag_part):
        self.r = real_part
        self.i = imag_part
x = MyComplex(5.0, -3.4)
print(x.r, x.i)   # 输出结果：5.0 -3.4

~~~

### 继承

~~~python
#类定义
class person:
    #定义基本属性
    name = ''
    age = 0
    #定义私有属性,私有属性在类外部无法直接进行访问
    __weight = 0
    #定义构造方法
    def __init__(self,n,a,w):
        self.name = n
        self.age = a
        self.__weight = w
    def talk(self):
        print("%s的年龄是 %d 岁。" %(self.name,self.age))
#单继承示例
class student(person):
    grade = ''
    def __init__(self,n,a,w,g):
        #调用父类的构函
        people.__init__(self,n,a,w)
        self.grade = g
    #覆写父类的方法
    def talk(self):
        print("%s的年龄是 %d 岁，目前在读 %d 年级"%(self.name,self.age,self.grade))
s = student('小Show',12,60,5)
s.talk()
~~~



### 多個继承

~~~python
#类定义
class person:
    #定义基本属性
    name = ''
    age = 0
    #定义私有属性,私有属性在类外部无法直接进行访问
    __weight = 0
    #定义构造方法
    def __init__(self,n,a,w):
        self.name = n
        self.age = a
        self.__weight = w
    def speak(self):
        print("%s的年龄是 %d 岁。" %(self.name,self.age))
#单继承示例
class student(person):
    grade = ''
    def __init__(self,n,a,w,g):
        #调用父类的构函
        people.__init__(self,n,a,w)
        self.grade = g
    #覆写父类的方法
    def talk(self):
        print("%s的年龄是 %d 岁，目前在读 %d 年级"%(self.name,self.age,self.grade))
#另一个类，多重继承之前的准备
class speaker():
    topic = ''
    name = ''
    def __init__(self,n,t):
        self.name = n
        self.topic = t
    def talk(self):
        print("%s是一个演说家，今天ta演讲的主题是 %s"%(self.name,self.topic))
#多重继承
class sample(speaker,student):
    a =''
    def __init__(self,n,a,w,g,t):
        student.__init__(self,n,a,w,g)
        speaker.__init__(self,n,t)
test = sample("ShowMeAI",25,80,4,"Python")
test.talk()   #方法名同，默认调用的是在括号中排前地父类的方法



~~~





### 方法重载

~~~python
class Parent:        # 定义父类
   def my_method(self):
      print ('调用父类方法')
class Child(Parent): # 定义子类
   def my_method(self):
      print ('调用子类方法')
c = Child()          # 子类实例
c.my_method()         # 子类调用重写方法
super(Child,c).my_method() #用子类对象调用父类已被覆盖的方法



~~~





### 其他

~~~python
class Counter
# 私有属性 两个下划线开头
__private_attrs = 0
# 方法 def 开头 第一个参数 self
def cont(self):
    __private_attrs = 2



~~~



### 类的专有方法

- **__init__**： 构造函数，在生成对象时调用
- **__del__**： 析构函数，释放对象时使用
- **__repr__**： 打印，转换
- **__setitem__**： 按照索引赋值
- **__getitem__**： 按照索引获取值
- **__len__**： 获得长度
- **__cmp__**： 比较运算
- **__call__**： 函数调用
- **__add__**： 加运算
- **__sub__**： 减运算
- **__mul__**： 乘运算
- **__truediv__**： 除运算
- **__mod__**： 求余运算
- **__pow__**： 乘方