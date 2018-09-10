// 用职责链模式的另一种实现，中间件
(function(){
	let chains = [];
	function dispatch (i, chains, ...args) {
		let m = chains[i];
		if (m === undefined) return;
		m.call(null, ...args, function() {
			dispatch(i + 1, chains, ...args);
		});
	}
	class Middleware {
		constructor () {
			this.chains = [];
		}
		use (fn) {
			this.chains.push(fn);
		}
		dispatch (...args) {
			dispatch(0, this.chains, ...args);
		}
	}

	function order500 (type, pay, stock, next) {
		if (type === 1 && pay) {
			console.log('order500可以用100现金券');
			return;
		}
		next();
	}

	function order200 (type, pay, stock, next) {
		if (type ===2 && pay) {
			console.log('order200可以用50现金券');
			return;
		}
		next();
	}

	function other (type, pay, stock) {
		if (stock > 0) {
			console.log('还有库存');
		} else {
			console.log('库存为0');
		}
	}

	let mid = new Middleware();
	mid.use(order500);
	mid.use(order200);
	mid.use(other);

	window.chain2 = mid;
})();


