/**
 * Created by Jayce on 2017/4/28 0028.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var https=require('https');
	var url='https://mainsite-restapi.ele.me/shopping/restaurant/1383135?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=22.5831438&longitude=113.9568649';
	https.get(url,function (res2) {
		var arr='';
		res2.on('data',function (chunk) {
			arr+=chunk;
		});
		res2.on('end',function () {
			arr=JSON.parse(arr);
			for (var i = 0; i <arr.activities.length; i++) {
				console.log(arr.activities[i].description);
			}
			res.render('shop', { arr:arr});
		});
		res2.on('error',function (err) {
			console.log(err)
		});
		
	});
});

module.exports = router;
