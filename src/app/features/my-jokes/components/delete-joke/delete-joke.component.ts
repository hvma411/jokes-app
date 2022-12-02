import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { ButtonColor } from 'src/app/shared/enums/button-color.enum';
import { ToastColor } from 'src/app/shared/enums/toast-color.enum';
import { JokesApiService } from 'src/app/shared/services/jokes-api.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
	selector: 'app-delete-joke',
	templateUrl: './delete-joke.component.html',
	styleUrls: ['./delete-joke.component.scss']
})
export class DeleteJokeComponent implements OnDestroy {
	subscription: Subscription = new Subscription();
	cancelButtonColor: ButtonColor = ButtonColor.TRANSPARENT;

	constructor(
		private modalService: ModalService,
		private jokesApi: JokesApiService,
	) { }

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	handleDeleteJoke = (jokeId: string): void => {
		this.subscription.add(
			this.jokesApi.deleteJoke(jokeId).subscribe(resp => {
				this.modalService.closeModal();
				this.modalService.openModal(
					ToastComponent,
					{
						'title': 'Sukces',
						'message': 'Żart został pomyślnie usunięty.',
						'color': ToastColor.ACCEPT
					}
				)
			},
			(err) => {
				this.modalService.openModal(
					ToastComponent,
					{
						'title': 'Wystąpił błąd',
						'message': 'Coś poszło nie tak, spróbuj ponownie później.',
						'color': ToastColor.DANGER
					}
				)
			})
		)
	}

	handleCloseModal = (): void => this.modalService.closeModal();

}
