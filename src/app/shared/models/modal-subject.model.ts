export class ModalSubject {
	component: any;
	isVisible: boolean;
	data?: {[key: string]: any};

	constructor(component: any, isVisible: boolean, data?: {[key: string]: any},) {
		this.component = component;
		this.isVisible = isVisible;
		this.data = data;
	};
}