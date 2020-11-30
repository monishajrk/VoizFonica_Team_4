import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOffComponent } from './bill-off.component';

describe('BillOffComponent', () => {
  let component: BillOffComponent;
  let fixture: ComponentFixture<BillOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
