import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeregistrationComponent } from './employeeregistration.component';

describe('EmployeeregistrationComponent', () => {
  let component: EmployeeregistrationComponent;
  let fixture: ComponentFixture<EmployeeregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
