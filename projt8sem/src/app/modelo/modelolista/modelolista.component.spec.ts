import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelolistaComponent } from './modelolista.component';

describe('ModelolistaComponent', () => {
  let component: ModelolistaComponent;
  let fixture: ComponentFixture<ModelolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelolistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
