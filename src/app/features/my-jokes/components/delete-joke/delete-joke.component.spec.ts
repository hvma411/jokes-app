import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJokeComponent } from './delete-joke.component';

describe('DeleteJokeComponent', () => {
	let component: DeleteJokeComponent;
	let fixture: ComponentFixture<DeleteJokeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DeleteJokeComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(DeleteJokeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
