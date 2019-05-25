import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemoviesComponent } from './employeemovies.component';

describe('EmployeemoviesComponent', () => {
  let component: EmployeemoviesComponent;
  let fixture: ComponentFixture<EmployeemoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeemoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
