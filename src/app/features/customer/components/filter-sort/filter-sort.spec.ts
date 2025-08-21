import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSort } from './filter-sort';

describe('FilterSort', () => {
  let component: FilterSort;
  let fixture: ComponentFixture<FilterSort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
