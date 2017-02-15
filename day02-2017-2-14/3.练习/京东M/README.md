# webapp
>1.视口一定要写

######meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
>2.body.html{
   width:100%;
   height:100%;
}
>3.盒子模型(使用伸缩盒子布局)
>4.清除浮动
.clearfix::before,
.clearfix::after{
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
}
