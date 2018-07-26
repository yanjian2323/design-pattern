class Cart {
	constructor () {
		this.productList = [];
	}
	// 往购物车里添加商品
	add (product) {
		this.productList.push(product);
	}
	// 根据id从购物车删除商品
	del (id) {
		let removeIndex = this.productList.findIndex(p => p.id === id);
		this.productList.splice(removeIndex, 1);
	}
	showAllProducts () {
		return this.productList.map((p) => {
			return p.name;
		}).join('\n');
	}
}

// 创建单例购物车
export default (function getCart () {
	let cart = null;
	return function () {
		if (cart == null) {
			cart = new Cart();
		}
		return cart;
	};
})();