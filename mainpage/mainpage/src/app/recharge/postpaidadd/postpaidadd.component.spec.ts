import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidaddComponent } from './postpaidadd.component';

describe('PostpaidaddComponent', () => {
  let component: PostpaidaddComponent;
  let fixture: ComponentFixture<PostpaidaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
