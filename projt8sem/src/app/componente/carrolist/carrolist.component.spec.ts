import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrolistComponent } from './carrolist.component';

describe('CarrolistComponent', () => {
  let component: CarrolistComponent;
  let fixture: ComponentFixture<CarrolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrolistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
