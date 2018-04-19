import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferProgressLineComponent } from './offer-progress-line.component';

describe('OfferProgressLineComponent', () => {
  let component: OfferProgressLineComponent;
  let fixture: ComponentFixture<OfferProgressLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferProgressLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferProgressLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
