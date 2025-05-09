import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasalisteComponent } from './casaliste.component';

describe('CasalisteComponent', () => {
  let component: CasalisteComponent;
  let fixture: ComponentFixture<CasalisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasalisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasalisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
