import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';
import { Joke } from 'src/app/shared/models/joke.model';
import { JokesApiService } from 'src/app/shared/services/jokes-api.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { AddJokeComponent } from '../../components/add-joke/add-joke.component';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
	subscription: Subscription = new Subscription();
	jokes: Joke[] = [];
	categories: Category[] = [];
	currentJokeIdx: number = 0;

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

	handleNextJoke = (): void => {
		if (this.currentJokeIdx < this.jokes.length - 1) {
			this.currentJokeIdx++;
		};
	};

	handlePrevJoke = (): void => {
		if (this.currentJokeIdx > 0) {
			this.currentJokeIdx--;
		};
	};

	getCurrentJoke = (): string => 
		this.jokes[this.currentJokeIdx]?.content;

	getCurrentJokeCategory = (): string =>
		this.categories.find((category) => category.id === this.jokes[this.currentJokeIdx]?.category)?.name ?? 'Brak kategorii';

	private getJokesCategories = (): void => {
		this.subscription.add(
			this.jokesApi.getCategories().subscribe(resp => {
				this.categories = resp;
			})
		)
	}

	private getJokes = (): void => {
		this.subscription.add(
			this.jokesApi.getJokes().subscribe(resp => {
				this.jokes = resp;
			})
		)
	};
};
