// 有一个灯泡，默认情况下是关闭的，当按一下变成微光，再按一下变成强光，最后按一下灯泡关闭

class Light {
	constructor () {
		this.offState = new OffState(this);
		this.weakState = new WeakState(this);
		this.strongState = new StrongState(this);
		this.state = this.offState;
	}
	setState (state) {
		this.state = state;
	}
	getState () {
		return this.state;
	}
	press () {
		return this.state.press();
	}
}

// 关闭状态
class OffState {
	constructor (light) {
		this.light = light;
	}
	press () {
		console.log('现在是微光');
		this.light.setState(this.light.weakState);
		return '微光';
	}
}

// 弱光状态
class WeakState {
	constructor (light) {
		this.light = light;
	}
	press () {
		console.log('现在是强光');
		this.light.setState(this.light.strongState);
		return '强光';
	}
}

// 强光状态
class StrongState {
	constructor (light) {
		this.light = light;
	}
	press () {
		console.log('现在是关闭');
		this.light.setState(this.light.offState);
		return '关闭';
	}
}

export default Light;