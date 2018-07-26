import getCart from './cart';

class Product {
	constructor (data, productList) {
		this.$el = $('<div></div>');
		this.data = data;
		this.productList = productList;
		this.cart = getCart();
	}
	init () {
		this.initContent();
		this.initBtn();
		this.render();
	}
	initContent () {
		let $p = $(`
			<p>
				${this.data.name}
			</p>
			<p>
				${this.data.price}
			</p>
		`);
		this.$el.append($p);
	}
	initBtn () {
		let $btn = $(`
			<button>添加到购物车</button>
		`);
		this.$el.append($btn);
		$btn.on('click', () => {
			if ($btn.html() === '添加到购物车') {
				this.addToCart();
				$btn.html('从购物车删除');
			} else {
				this.delFromCart(this.data.id);
				$btn.html('添加到购物车');
			}
		});
	}
	addToCart () {
		this.cart.add(this.data);
	}
	delFromCart (id) {
		this.cart.del(id);
	}
	render () {
		this.productList.$el.append(this.$el);
	}
}

function createProxy (data) {
	return new Proxy(data, {
		get (target, key) {
			if (key === 'name') {
				target[key] = target[key] + '【折扣】';
			}
			if (key === 'price') {
				target[key] = target[key] * 0.8;
			}
			return target[key];
		}
	});
}

export default function createProduct (data, productList) {
	// 如果有折扣，那么打八折
	if (data.discount) {
		data = createProxy(data);
	}
	return new Product(data, productList);
}