import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RualisteComponent } from './rualiste.component';

describe('RualisteComponent', () => {
  let component: RualisteComponent;
  let fixture: ComponentFixture<RualisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RualisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RualisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
