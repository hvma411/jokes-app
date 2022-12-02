import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './pages/core/core.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		CoreComponent,
		HeaderComponent
	],
	imports: [
		CommonModule,
		CoreRoutingModule,
		SharedModule,
	]
})
export class CoreModule { }
