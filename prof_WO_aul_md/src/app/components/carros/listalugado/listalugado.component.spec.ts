import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalugadoComponent } from './listalugado.component';

describe('ListalugadoComponent', () => {
  let component: ListalugadoComponent;
  let fixture: ComponentFixture<ListalugadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListalugadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListalugadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
