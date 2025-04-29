import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasdetailComponent } from './marcasdetail.component';

describe('MarcasdetailComponent', () => {
  let component: MarcasdetailComponent;
  let fixture: ComponentFixture<MarcasdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcasdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcasdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
