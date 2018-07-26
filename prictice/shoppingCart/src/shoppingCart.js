import getCart from './cart';

export default class ShoppingCart {
	constructor (app) {
		this.$el = $('<div></div>');
		this.app = app;
		this.cart = getCart();
	}
	init () {
		this.initBtn();
		this.render();
	}
	initBtn () {
		let $btn = $('<button>显示购物车</button>');

		$btn.on('click', () => {
			this.show();
		});
		this.$el.append($btn);
	}
	show () {
		alert(this.cart.showAllProducts());
	}
	render () {
		this.app.$el.append(this.$el);
	}
}