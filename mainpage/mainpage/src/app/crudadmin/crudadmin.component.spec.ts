import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudadminComponent } from './crudadmin.component';

describe('CrudadminComponent', () => {
  let component: CrudadminComponent;
  let fixture: ComponentFixture<CrudadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
