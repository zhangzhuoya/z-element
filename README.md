## 编写布局容器
### 编写
1. 建立组件文件 main container header footer
2. 注册全局使用 name.install方法 在全局注册
  1. 编写container组件 根据 direction 判断子元素的排列方式
  2. 设置container的scss样式，为flex布局 水平排列
  3. 设置props属性的传递值，
  4. 根据计算属性来设置 class的is-vertail 是否为true
  5. 计算属性如果为 horizontal则为ture 为 vertail为false
  5. 判断是否为header或者为footer组件，然后判断是否存在this.$slot this.$slot.default 如果存在用some遍历 vNode.componentOptions 如果存在值则为有组件 在根据componentOptions.name值判断组件名字，如果为ture返回 反之为false
## 遇到的问题
