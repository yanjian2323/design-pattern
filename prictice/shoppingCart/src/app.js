import ShoppingCart from './shoppingCart';
import ProductList from './productList';

export default class App {
	constructor (id) {
		this.$el = $(`#${id}`);
	}
	init () {
		this.initShoppingCart();
		this.initProductList();
	}
	initShoppingCart () {
		(new ShoppingCart(this)).init();
	}
	initProductList () {
		(new ProductList(this)).init();
	}
}