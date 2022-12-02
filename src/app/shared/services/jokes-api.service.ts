import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JokesApi } from '../config/routes/jokes-api.routes';
import { Category } from '../models/category.model';
import { Joke } from '../models/joke.model';

@Injectable({
	providedIn: 'root'
})
export class JokesApiService {
	constructor(
		private http: HttpClient,
	) { }

	getCategories = (): Observable<Category[]> =>
		this.http.get<Category[]>(JokesApi.GET.categories);

	getJokes = (): Observable<Joke[]> =>
		this.http.get<Joke[]>(JokesApi.GET.jokes);

	addJoke = (joke: Joke): Observable<any> =>
		// commented example of post of new joke
		// this is only client side project so reutning {} observable
		// this.http.post<any>(JokesApi.POST.joke, joke);
		of({});

	deleteJoke = (jokeId: string): Observable<any> =>
		// commented example of deleting joke
		// this is only client side project so reutning {} observable
		// this.http.delete(JokesApi.DELETE.joke, { body: { jokeId} });
		of({});
}
