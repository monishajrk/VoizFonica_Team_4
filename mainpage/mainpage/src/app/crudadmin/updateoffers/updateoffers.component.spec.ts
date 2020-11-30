import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateoffersComponent } from './updateoffers.component';

describe('UpdateoffersComponent', () => {
  let component: UpdateoffersComponent;
  let fixture: ComponentFixture<UpdateoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
