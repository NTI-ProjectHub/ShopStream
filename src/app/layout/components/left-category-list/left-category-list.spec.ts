import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCategoryList } from './left-category-list';

describe('LeftCategoryList', () => {
  let component: LeftCategoryList;
  let fixture: ComponentFixture<LeftCategoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftCategoryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftCategoryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
