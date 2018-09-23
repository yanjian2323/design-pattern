// 实现一个异步的职责链
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
		next (...arg) {
			if (this.successor) {
				this.successor.handle(...arg);
			}
		}
	}

	function print1 (...arg) {
		console.log('print1',...arg);
		return false;
	}

	function print2 (...arg) {
		setTimeout(() => {
			console.log('print2',...arg);
			this.next(...arg);
		}, 2000);
	}

	function print3 (...arg) {
		console.log('print3',...arg);
	}

	let chain1 = new Chain(print1);
	let chain2 = new Chain(print2);
	let chain3 = new Chain(print3);

	chain1.setSuccessor(chain2);
	chain2.setSuccessor(chain3);

	window.asyncChain = chain1;
})();


