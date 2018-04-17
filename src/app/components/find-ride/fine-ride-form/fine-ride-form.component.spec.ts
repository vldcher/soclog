import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FineRideFormComponent } from './fine-ride-form.component';

describe('FineRideFormComponent', () => {
  let component: FineRideFormComponent;
  let fixture: ComponentFixture<FineRideFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineRideFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineRideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
