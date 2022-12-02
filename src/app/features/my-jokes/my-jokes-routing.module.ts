import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyJokesComponent } from './pages/my-jokes/my-jokes.component';

const routes: Routes = [
	{
		path: '',
		component: MyJokesComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyJokesRoutingModule { }
