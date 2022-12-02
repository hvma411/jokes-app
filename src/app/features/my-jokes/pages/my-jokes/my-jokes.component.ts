import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddJokeComponent } from 'src/app/features/main/components/add-joke/add-joke.component';
import { Category } from 'src/app/shared/models/category.model';
import { Joke } from 'src/app/shared/models/joke.model';
import { JokesApiService } from 'src/app/shared/services/jokes-api.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
	selector: 'app-my-jokes',
	templateUrl: './my-jokes.component.html',
	styleUrls: ['./my-jokes.component.scss']
})
export class MyJokesComponent implements OnInit, OnDestroy {
	subscription: Subscription = new Subscription();
	categories: Category[] = [];
	jokes: Joke[] = [];

	constructor(
		private jokesApi: JokesApiService,
		private modalService: ModalService,
	) { };

	ngOnInit(): void {
		this.getJokesCategories();
		this.getJokes();
	};

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	};

	openAddNewJokeModal = (): void => this.modalService.openModal(AddJokeComponent);

	getJokesForColumn = (column: 0 | 1): Joke[] => {
		const arrHalf = Math.ceil(this.jokes.length / 2);
		return this.jokes.slice(column, arrHalf);
	}

	getCurrentJokeCategory = (categoryId: string): string =>
		this.categories.find((category) => category.id === categoryId)?.name ?? 'Brak kategorii';

	private getJokesCategories = (): void => {
		this.subscription.add(
			this.jokesApi.getCategories().subscribe(resp => {
				this.categories = resp;
			})
		)
	};

	private getJokes = (): void => {
		this.subscription.add(
			this.jokesApi.getJokes().subscribe(resp => {
				this.jokes = resp;
			})
		)
	};
}
