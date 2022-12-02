import { Component, Input } from '@angular/core';
import { ToastColor } from '../../enums/toast-color.enum';
import { ModalService } from '../../services/modal.service';

@Component({
	selector: 'app-toast',
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
	@Input() title: string = '';
	@Input() message: string = '';
	@Input() color: ToastColor = ToastColor.ACCEPT;
	
	constructor(
		private modalService: ModalService,
	) { }

	handleCloseModal = (): void => this.modalService.closeModal();
}
