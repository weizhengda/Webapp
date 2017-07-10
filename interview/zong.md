
0. rem 的概念？

  - 「rem」是指根元素（root element，html）的字体大小

1. Px和Rem的区别 

* Px和Rem都是网站开发中设置字体 宽度高度的单位
* Px一般用在pc端比较多。Rem一般用在移动端，主要适配不同终端
* Rem相对于根元素的。Px多大就是多大。


2. px 和 rem 的换算

  * 一般都是以<body>的“font-size”为基准。
  * 计算公式： 1 ÷ 父元素的font-size × 需要转换的像素值 = em值

  * 比如说我们使用“1em”等于“10px”来改变默认值“1em=16px”，这样一来，我们设置字体大小相当于“14px”时，只需要将其值设置为“1.4em”

  ```css
           body {
				font-size: 62.5%;/*10 ÷ 16 × 100% = 62.5%*/
			}
			h1 {
				font-size: 2.4em; /*2.4em × 10 = 24px */
			}
			p	{
				font-size: 1.4em; /*1.4em × 10 = 14px */
			}
			li {
				font-size: 1.4em; /*1.4 × ? = 14px ? */
			}

  ```

3. 移动端怎么做适配

* 移动端得加视口  viewport
* 布局： 百分比结合响应式 有时候也用到flex布局
* 字体宽度高度用rem
* 有些css3的属性得加前缀


4. 说说移动端是如何调试的

* 电脑的浏览器上面调试模式模拟手机端调试
* 其次在手机上面的默认浏览器测试 （ios android  多个手机）
* 微信里面测试
* Uc浏览器测试


5. 你怎么看待Web App 、hybrid App、Native App？


用途：
	Web App 相当于移动端web页面,用途非常广相当于手机上面的网站。  有利于百度收录
	hybrid App、Native App	 安装在手机上面的app

用户体验：
	Web App 、hybrid App、Native App  从左向用用户体验越来越好

运行环境：
	Web App浏览器运行  或者微信里面运行
	hybrid App、Native App 安装到手机上面的

		
开发成本    学习成本   维护成本：
	Web App 、hybrid App、Native App  成本一个比一个高 从左向右


6. 说一下自己是怎么写响应式布局的？rem是怎么计算的，在移动端是怎么算的？


响应式布局主要是用的媒体查询@media 支持ie9以上以及其它浏览器。
可以查询设备分辨率，浏览器宽度等，设置不同的样式或者直接引入不同的样式表。 
Rem是根据html的font-size 来设定的。

7. 移动端的兼容性问题

 * jquery的300ms点击延迟问题 
   * zepto.js的tap()方法处理点击事件
   * fastclick.js
   * touch.js

* 1px问题(移动端无法识别0.5px)
  * 用伪类选择器after,设置为1px,在缩小0.5倍