import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalSubject } from '../models/modal-subject.model';

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	private modalSubject: BehaviorSubject<ModalSubject> = new BehaviorSubject(new ModalSubject(null, false))
	modalSubjectObservable: Observable<ModalSubject> = this.modalSubject.asObservable();
	
	openModal = (component: any, data?: {[key: string]: any}): void => {
		this.modalSubject.next(new ModalSubject(component, true, data))
	};

	closeModal = (): void => {
		this.modalSubject.next(new ModalSubject(null, false));
	};
}
