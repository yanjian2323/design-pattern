import Light from './state';

export default class LightBox {
	constructor () {
		this.light = new Light();
		this.init();
	}
	initBtn () {
		let $btn = this.$btn = $('<button>关闭</button>');
		this.$btn.on('click', () => {
			// 和之前的代码相比，这个地方不用再写很多的if else 了
			// 符合开闭原则,之后添加状态，这个地方不用做任何修改
			let text = this.light.press();
			$btn.html(text);
		});
	}
	init () {
		this.initBtn();
	}
	render ($parent) {
		$parent.append(this.$btn);
	}
}