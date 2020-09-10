import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersReviewComponent } from './customers-review.component';

describe('CustomersReviewComponent', () => {
  let component: CustomersReviewComponent;
  let fixture: ComponentFixture<CustomersReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
