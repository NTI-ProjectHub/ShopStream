import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCards } from './promo-cards';

describe('PromoCards', () => {
  let component: PromoCards;
  let fixture: ComponentFixture<PromoCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
