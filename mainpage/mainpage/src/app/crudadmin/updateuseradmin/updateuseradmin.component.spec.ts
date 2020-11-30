import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuseradminComponent } from './updateuseradmin.component';

describe('UpdateuseradminComponent', () => {
  let component: UpdateuseradminComponent;
  let fixture: ComponentFixture<UpdateuseradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuseradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuseradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
