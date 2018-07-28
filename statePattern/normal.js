// 有一个灯泡，默认情况下是关闭的，当按一下变成微光，再按一下变成强光，最后按一下灯泡关闭

class Light{
	constructor (app) {
		this.state = 'off';
		this.$btn = null;
		this.init();
	}
	initBtn () {
		let $btn = this.$btn = $('<button>关闭</button>');
		this.$btn.on('click', () => {
			if (this.state === 'off') {
				$btn.html('微光');
				console.log('现在是微光');
				this.state = 'weakLight';
			} else if (this.state === 'weakLight') {
				$btn.html('强光');
				console.log('现在是强光');
				this.state = 'strongLight';
			} else if (this.state === 'strongLight') {
				$btn.html('关闭');
				console.log('现在是关闭');
				this.state = 'off';
			}
		});
	}
	init () {
		this.initBtn();
	}
	render ($parent) {
		$parent.append(this.$btn);
	}
}

export default Light;