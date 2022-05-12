import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsertClienteComponent } from './form-insert-cliente.component';

describe('FormInsertClienteComponent', () => {
  let component: FormInsertClienteComponent;
  let fixture: ComponentFixture<FormInsertClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInsertClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInsertClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
