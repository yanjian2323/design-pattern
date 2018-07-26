import Product from './product';

export default class ProductList {
	constructor (app) {
		this.$el = $('<div></div>');
		this.app = app;
	}
	// public
	init () {
		this.loadData()
		.then((productList) => {
			this.initProductList(productList);
		})
		.then(() => {
			this.render();
		});
	}
	// private
	loadData () {
		return fetch('/json/productList.json').then((res) => {
			return res.json();
		})
	}
	// private
	initProductList (productList) {
		productList.forEach((productData) => {
			let p = new Product(productData, this);
			p.init();
		});
	}
	// private
	render ($parent) {
		this.app.$el.append(this.$el);
	}
}