import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalSubject } from 'src/app/shared/models/modal-subject.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
	selector: 'app-core',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, OnDestroy {
	@ViewChild('modal', { read: ViewContainerRef })	modal!: ViewContainerRef;
	componentRef!: ComponentRef<any>;
	subscirpiton: Subscription = new Subscription();

	constructor(
		private modalService: ModalService,
	) { };

	ngOnInit(): void {
		this.listenForModalVisibilityChange();
	};

	ngOnDestroy(): void {
		this.subscirpiton.unsubscribe();
	};

	private listenForModalVisibilityChange = (): void => {
		this.subscirpiton.add(
			this.modalService.modalSubjectObservable.subscribe(modal => {
				this.handleToggleModalVisibility(modal);
			})
		)
	};

	private handleToggleModalVisibility = (modal: ModalSubject): void => {
		if (modal.isVisible) {
			this.componentRef = this.modal.createComponent(modal.component);
			if (modal.data) {
				this.setInputs(modal.data);
			}
		}
		if (!modal.isVisible && this.componentRef) {
			this.modal.clear();
		}
	};

	private setInputs = (data: {[key: string]: any}): void => {
		Object.keys(data).forEach(key => {
			this.componentRef.setInput(key, data[key]);
		})
	}
}
