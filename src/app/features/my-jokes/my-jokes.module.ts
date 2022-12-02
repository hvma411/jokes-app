import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyJokesRoutingModule } from './my-jokes-routing.module';
import { MyJokesComponent } from './pages/my-jokes/my-jokes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteJokeComponent } from './components/delete-joke/delete-joke.component';


@NgModule({
	declarations: [
		MyJokesComponent,
  DeleteJokeComponent,
	],
	imports: [
		CommonModule,
		MyJokesRoutingModule,
		SharedModule,
	]
})
export class MyJokesModule { }
