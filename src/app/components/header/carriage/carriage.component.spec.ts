import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriageComponent } from './carriage.component';

describe('CarriageComponent', () => {
  let component: CarriageComponent;
  let fixture: ComponentFixture<CarriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
