// import { animate, Promise } from "liquid-fire";

export default function() {
	this.transition(
		this.hasClass('container'),
		this.toValue(true),
		this.use('toRight', {duration: 200}),
		this.reverse('toLeft', {duration: 200})
	);
}
