import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentsDashboard } from './restaurents-dashboard';

describe('RestaurentsDashboard', () => {
  let component: RestaurentsDashboard;
  let fixture: ComponentFixture<RestaurentsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurentsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
