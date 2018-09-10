/* 有这么一个场景，一个购物网站
	1. 用户可以先交500订金，真正购物的时候返100现金券
	2. 用户可以先交200订金，真正购物的时候返50现金券
	3. 如果没有交订金，真正购物的时候需要先判断库存有没有货，有货才能购买，交过定金则不用担心库存的问题
	4. 用type来区分是哪种类型，1: 交了500定金。 2: 交200订金。 3： 没交订金
	5. 用pay(true或者false)表示500订金和200订金是否支付过，因为有些用户可能下了订单但却没有支付
	6. stock表示库存
*/

// 可以用写下面的代码来实现整个逻辑

(function(){
	function order500 (type, pay, stock) {
		if (type === 1 && pay) {
			console.log('order500可以用100现金券');
		} else {
			order200(type, pay, stock);
		}
	}

	function order200 (type, pay, stock) {
		if (type ===2 && pay) {
			console.log('order200可以用50现金券');
		} else {
			other(type, pay, stock);
		}
	}

	function other (type, pay, stock) {
		if (stock > 0) {
			console.log('还有库存');
		} else {
			console.log('库存为0');
		}
	}

	function purchase(type, pay, stock) {
		order500(type, pay, stock);
	}
	window.purchase = purchase;
})();

/*
	上面的代码虽然解决了需求问题，但是有几个问题
	1. 维护性太差，如果将来业务发生变化要去掉stock参数，很多地方都要修改，很难维护
	2. 适应性太差，代码定义了整个流程，不能使用在其他业务场景下复用
	3. 扩展性太差，如果要增加一个订金300的业务场景，不利于扩展
*/