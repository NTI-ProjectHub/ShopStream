import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCategoryList } from './aside-category-list';

describe('AsideCategoryList', () => {
  let component: AsideCategoryList;
  let fixture: ComponentFixture<AsideCategoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideCategoryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideCategoryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
