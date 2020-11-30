import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysucceessComponent } from './paysucceess.component';

describe('PaysucceessComponent', () => {
  let component: PaysucceessComponent;
  let fixture: ComponentFixture<PaysucceessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysucceessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysucceessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
