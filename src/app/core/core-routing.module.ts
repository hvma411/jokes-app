import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './pages/core/core.component';

const routes: Routes = [
	{
		path: '',
		component: CoreComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				loadChildren: () => import('../features/main/main.module').then(m => m.MainModule),
			},
			{
				path: 'my-jokes',
				pathMatch: 'full',
				loadChildren: () => import('../features/my-jokes/my-jokes.module').then(m => m.MyJokesModule),
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
