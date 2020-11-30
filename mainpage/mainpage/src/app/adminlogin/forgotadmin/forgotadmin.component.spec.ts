import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotadminComponent } from './forgotadmin.component';

describe('ForgotadminComponent', () => {
  let component: ForgotadminComponent;
  let fixture: ComponentFixture<ForgotadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
