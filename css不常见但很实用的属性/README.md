# css不常见但很实用的属性

>提示
所有属性默认运行环境实在Chrome下，当然这些属性中大多为CSS3属性，导致兼容性很差，如果你的生产环境是最新的Chrome和Electronic那就放开了玩。
兼容性查询：http://www.caniuse.com/
插件查询：[caniuse-cmd](https://www.npmjs.com/package/caniuse-cmd)

### -webkit-line-clamp
可以把块容器中的内容限制为指定的行数；并且在超过行数后，超过后显示"..."。
```css
.line-clamp {
  display: -webkit-box; /*值必须为-webkit-box或者-webkit-inline-box*/
  -webkit-box-orient: vertical; /*值必须为vertical*/
  -webkit-line-clamp: 2; /*值为数字，表示一共显示几行*/
  overflow: hidden;
}
```
兼容性：
```bash
IE ✘  
Edge ✘ 12+ ✔ 17+¹ ✔ 79+ᵖ 
Firefox ✘ 2+ ✔ 68+ᵖ 
Chrome ‽ 4+ ✔ 14+ᵖ 
Safari ✘ 3.1+ ✔ 5+ᵖ 
Opera ✘ 9+ ✔ 15+ᵖ
```
### all
将除去 unicode-bidi 与 direction 之外的所有属性重设至其初始值，或继承值。
```css
all: unset; /*initial | inherit | unset*/
```
兼容性：
![](https://s1.ax1x.com/2020/06/10/to2jJK.md.png)
+ initial 改变该元素所有属性的值至初始值。
+ inherit 改变该元素的值 至 从父元素继承的值。
+ unset 如果该元素的属性的值是可继承的，重置为父元素的继承的值，反之则改变为初始值。

### caret-color
caret-color 属性用来定义插入光标（caret）的颜色，这里说的插入光标，就是那个在网页的可编辑器区域内，用来指示用户的输入具体会插入到哪里的那个一闪一闪的形似竖杠 `|` 的东西。
```css
caret-color: yellow; /* color | auto | transparent */
```
兼容性：
```bash
IE ✘  
Edge ✘ 12+ ✔ 79+ 
Firefox ✘ 2+ ✔ 53+ 
Chrome ✘ 4+ ✔ 57+ 
Safari ✘ 3.1+ ✔ 11.1+ 
Opera ✘ 9+ ✔ 44+ 
```

### cli-path
clip-path CSS 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。
```css
clip-path: circle(50px); /* 圆形剪裁 */
clip-path: ellipse(80px 40px at 50% 50%); /* 椭圆剪裁 */
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* 矩形剪裁 */
```
兼容性：
```
IE ✘  
Edge ✘ 12+ ✘ 18+⁴ ◒ 79+² 
Firefox ✘ 2+ ◒ 3.5+¹ ◒ 47+¹ ✔ 54+ 
Chrome ✘ 4+ ◒ 24+ᵖ² ◒ 55+² 
Safari ✘ 3.1+ ◒ 7+ᵖ² 
Opera ✘ 9+ ◒ 15+ᵖ² ◒ 42+² 
```

### shape-outside
shape-outside的CSS 属性定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装。 默认情况下，内联内容包围其边距框; shape-outside提供了一种自定义此包装的方法，可以将文本包装在复杂对象周围而不是简单的框中。shape-outside的属性与cli-path很相似，两则也常常一起使用。
```css
shape-outside: circle(50px); /* 圆形环绕 */
shape-outside: ellipse(80px 40px at 50% 50%); /* 椭圆环绕 */
shape-outside: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* 矩形环绕 */
```
shape-outside与cli-path配合使用
```css
.shape-box {
  width: 100px;
  height: 100px;
  margin: 10px;
  margin-left: 0;
  background-color: teal;
  float: left; /* 使用浮动让文本环绕 */
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
```
兼容性：
```
IE ✘  
Edge ✘ 12+ ✔ 79+ 
Firefox ✘ 2+ ✘ 51+² ✔ 62+ 
Chrome ✘ 4+ ✘ 34+¹ ✔ 37+ 
Safari ✘ 3.1+ ✔ 7.1+ᵖ ✔ 10.1+ 
Opera ✘ 9+ ✔ 24+ 
```

### conic-gradient
在背景颜色渐变中我们最常用到的是线性渐变和径向渐变，然而锥形渐变使用得很少。
```css
.conic-gradient {
  background: linear-gradient(red, orange, black, green, blue); /* 线性渐变 */
  background: radial-gradient(red, orange, black, black, black); /* 径向渐变 */
  background: conic-gradient( red, orange, black, green, blue); /* 锥形渐变 */
}
```