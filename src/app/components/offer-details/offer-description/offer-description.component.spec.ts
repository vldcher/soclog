import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDescriptionComponent } from './offer-description.component';

describe('OfferDescriptionComponent', () => {
  let component: OfferDescriptionComponent;
  let fixture: ComponentFixture<OfferDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
