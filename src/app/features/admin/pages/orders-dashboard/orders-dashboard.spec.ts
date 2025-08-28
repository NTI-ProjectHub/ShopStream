import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDashboard } from './orders-dashboard';

describe('OrdersDashboard', () => {
  let component: OrdersDashboard;
  let fixture: ComponentFixture<OrdersDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
