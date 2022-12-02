import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddJokeComponent } from './components/add-joke/add-joke.component';



@NgModule({
	declarations: [
		MainPageComponent,
    	AddJokeComponent,
	],
	imports: [
		CommonModule,
		MainRoutingModule,
		SharedModule,
	]
})
export class MainModule { }
