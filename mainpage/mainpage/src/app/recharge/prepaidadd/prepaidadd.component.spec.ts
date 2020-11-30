import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidaddComponent } from './prepaidadd.component';

describe('PrepaidaddComponent', () => {
  let component: PrepaidaddComponent;
  let fixture: ComponentFixture<PrepaidaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
