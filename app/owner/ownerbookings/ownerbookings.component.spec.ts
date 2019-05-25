import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerbookingsComponent } from './ownerbookings.component';

describe('OwnerbookingsComponent', () => {
  let component: OwnerbookingsComponent;
  let fixture: ComponentFixture<OwnerbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
