import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOfferComponent } from './payment-offer.component';

describe('PaymentOfferComponent', () => {
  let component: PaymentOfferComponent;
  let fixture: ComponentFixture<PaymentOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
