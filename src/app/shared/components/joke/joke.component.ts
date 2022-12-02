import { Component, Input } from '@angular/core';
import { DeleteJokeComponent } from 'src/app/features/my-jokes/components/delete-joke/delete-joke.component';
import { ButtonColor } from '../../enums/button-color.enum';
import { ModalService } from '../../services/modal.service';

@Component({
	selector: 'app-joke',
	templateUrl: './joke.component.html',
	styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
	@Input() category: string = '';
	@Input() joke: string = '';
	@Input() myJokeView: boolean = false;
	deleteButtonColor: ButtonColor = ButtonColor.DANGER;

	constructor(
		private modalService: ModalService
	) {};

	handleOpenDeleteJokeModal = (): void => {
		this.modalService.openModal(DeleteJokeComponent);
	};
}
