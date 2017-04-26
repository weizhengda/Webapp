/**
 * Created by Jayce on 2017/4/25 0025.
 */


//tab切换

$('nav a').click(function () {
	$(this).parent('nav').next();
});