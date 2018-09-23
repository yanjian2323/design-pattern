// 用职责链模式来重构代码
(function(){

	class Chain {
		constructor (fn) {
			this.fn = fn;
			this.successor = null;
		}
		setSuccessor (successor) {
			this.successor = successor;
		}
		handle (...arg) {
			let ret = this.fn.apply(this, arg);
			// 表示没处理,那么要交给下一个节点去处理
			if (ret === false && this.successor) {
				return this.successor.handle(...arg);
			}
			return ret;
		}
	}

	function order500 (type, pay, stock) {
		if (type === 1 && pay) {
			console.log('order500可以用100现金券');
			return true;
		}
		return false;
	}

	function order200 (type, pay, stock) {
		if (type ===2 && pay) {
			console.log('order200可以用50现金券');
			return true;
		}
		return false;
	}

	function other (type, pay, stock) {
		if (stock > 0) {
			console.log('还有库存');
		} else {
			console.log('库存为0');
		}
		return true;
	}

	let chain1 = new Chain(order500);
	let chain2 = new Chain(order200);
	let chain3 = new Chain(other);

	chain1.setSuccessor(chain2);
	chain2.setSuccessor(chain3);

	window.chain = chain1;
})();


