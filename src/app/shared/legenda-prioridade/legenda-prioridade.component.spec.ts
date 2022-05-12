import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaPrioridadeComponent } from './legenda-prioridade.component';

describe('LegendaPrioridadeComponent', () => {
  let component: LegendaPrioridadeComponent;
  let fixture: ComponentFixture<LegendaPrioridadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendaPrioridadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendaPrioridadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
