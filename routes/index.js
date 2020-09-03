var express = require('express');
var router = express.Router();
var commonBar = [{
		className: 'active',
		href: '/',
		text: '首页',
	}, {
		className: '',
		href: '/login',
		text: '登入',
	}, {
		className: '',
		href: '/reg',
		text: '注册',
	}];

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.baseUrl)
	res.render('index', {
		id: 'index',
		title: 'Express',
		commonBar: commonBar,
	});
});
router.get('/reg', function(req, res, next) {
	console.log(req.baseUrl)
	res.render('reg',{
		id: 'reg',
		title: '用户注册',
		commonBar: commonBar,
	});
});

router.post('reg',function(req,res,next){
	console.log('注册提交服务器信息',req)
})

module.exports = router;
