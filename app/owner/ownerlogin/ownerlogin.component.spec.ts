import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerloginComponent } from './ownerlogin.component';

describe('OwnerloginComponent', () => {
  let component: OwnerloginComponent;
  let fixture: ComponentFixture<OwnerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
