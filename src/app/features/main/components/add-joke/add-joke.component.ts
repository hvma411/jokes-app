import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { ButtonColor } from 'src/app/shared/enums/button-color.enum';
import { ToastColor } from 'src/app/shared/enums/toast-color.enum';
import { Category } from 'src/app/shared/models/category.model';
import { Joke } from 'src/app/shared/models/joke.model';
import { JokesApiService } from 'src/app/shared/services/jokes-api.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
	selector: 'app-add-joke',
	templateUrl: './add-joke.component.html',
	styleUrls: ['./add-joke.component.scss']
})
export class AddJokeComponent implements OnInit, OnDestroy {
	categories: Category[] = [];
	subscription: Subscription = new Subscription();
	jokeFormGroup!: FormGroup;
	cancelButtonColor: ButtonColor = ButtonColor.TRANSPARENT;

	constructor(
		private fb: FormBuilder,
		private modalService: ModalService,
		private jokesApi: JokesApiService,
	) { }

	ngOnInit(): void {
		this.getJokesCategories();
		this.createJokeFormGroup();
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	handleAddJoke = (): void => {
		this.subscription.add(
			this.jokesApi.addJoke(this.createNewJokeBody()).subscribe(resp => {
				this.modalService.closeModal();
				this.modalService.openModal(
					ToastComponent,
					{
						'title': 'Sukces',
						'message': 'Żart został pomyślnie dodany',
						'color': ToastColor.ACCEPT
					}
				)
			},
			(err) => {
				this.modalService.openModal(
					ToastComponent,
					{
						'title': 'Wystąpił błąd',
						'message': 'Coś poszło nie tak, spróbuj ponownie później',
						'color': ToastColor.DANGER
					}
				)
			})
		)
	}

	handleCloseModal = (): void => this.modalService.closeModal();

	private getJokesCategories = (): void => {
		this.subscription.add(
			this.jokesApi.getCategories().subscribe(resp => {
				this.categories = resp;
			})
		)
	}

	private createNewJokeBody = (): Joke => 
		new Joke(
			this.jokeFormGroup.value.category,
			this.jokeFormGroup.value.content
		);

	private createJokeFormGroup = (): void => {
		this.jokeFormGroup = this.fb.group({
			category: [],
			content: [],
		});
	};
}
