import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPresentationComponent } from './user-presentation.component';

describe('UserPresentationComponent', () => {
  let component: UserPresentationComponent;
  let fixture: ComponentFixture<UserPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
