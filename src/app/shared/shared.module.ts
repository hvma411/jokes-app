import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { JokeComponent } from './components/joke/joke.component';



@NgModule({
	declarations: [
		JokeComponent,
		ButtonComponent,
  		ModalComponent,
		ToastComponent,
  		PageWrapperComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		JokeComponent,
		ButtonComponent,
		ModalComponent,
		ReactiveFormsModule,
		FormsModule,
		ToastComponent,
		PageWrapperComponent,
	]
})
export class SharedModule { }
