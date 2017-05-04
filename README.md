# webapp


##移动端要点

1.视口一定要写

```html

meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
```
2.窗口的宽高

```css
   body.html{
      width:100%;
      height:100%;
   }
```


3.使用伸缩盒子布局/或者做适配（伸缩盒子布局不够完美）

4.清除浮动

```css

.clearfix::before,
.clearfix::after{
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
}

```

5. 如何选择模拟设备？
    - 图片大小为 640 * xxx ,选择 320*xxx(iphone5)
    

6. 做适配
   
    - 默认 1rem=16px
    - 设置单位转换 1rem=100px;
    - 设置 

 ```html
 
    html{
       font-size:100px;
    }
    body{
      font-size:16px;
    }    
```
   - 媒体查询（用js来实现会比较简单）
   
   ```js
     //common.js
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
    
                if (clientWidth >= 740) {
                    clientWidth = 740;
                }
                if (clientWidth <= 320) {
                    clientWidth = 320;
                }
    
                docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

```
##资料
* [移动端的各种坑及解决方案](https://github.com/RubyLouvre/mobileHack)