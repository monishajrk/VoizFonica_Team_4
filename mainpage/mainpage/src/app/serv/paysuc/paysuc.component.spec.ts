import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysucComponent } from './paysuc.component';

describe('PaysucComponent', () => {
  let component: PaysucComponent;
  let fixture: ComponentFixture<PaysucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
