import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrodetalheComponent } from './carrodetalhe.component';

describe('CarrodetalheComponent', () => {
  let component: CarrodetalheComponent;
  let fixture: ComponentFixture<CarrodetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrodetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrodetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
