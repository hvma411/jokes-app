import { Component, Input } from '@angular/core';
import { ButtonColor } from '../../enums/button-color.enum';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input() text: string = '';
	@Input() action: Function = () => {};
	@Input() color: ButtonColor = ButtonColor.ACCEPT;
}
