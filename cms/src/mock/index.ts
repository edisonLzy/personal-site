import Mock from 'mockjs';

Mock.mock('v1/api/user/login',{
	'firstName|3':'fei',//重复fei这个字符串 3 次，打印出来就是'feifeifei'。
	'lastName|2-5':'jiang',//重复jiang这个字符串 2-5 次。
	'big|+1':0, //属性值自动加 1，初始值为 0
	'age|20-30':25,//生成一个大于等于 20、小于等于 30 的整数，属性值 25 只是用来确定类型
	'weight|100-120.2-5':110.24,//生成一个浮点数,整数部分大于等于 100、小于等于 120，小数部分保留 2 到 5 位。
});
