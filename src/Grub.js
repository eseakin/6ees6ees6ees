class Grub {
	constructor(age, color) {

		this.age = age || 0;
		this.color = color || 'pink';
		this.food = 'jelly';
	}
	eat() {
		return 'Mmmmmmmmm jelly';
	}
};

export default Grub;