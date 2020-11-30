import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongleaddComponent } from './dongleadd.component';

describe('DongleaddComponent', () => {
  let component: DongleaddComponent;
  let fixture: ComponentFixture<DongleaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongleaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DongleaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
