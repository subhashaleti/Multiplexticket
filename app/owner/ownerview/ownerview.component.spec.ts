import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerviewComponent } from './ownerview.component';

describe('OwnerviewComponent', () => {
  let component: OwnerviewComponent;
  let fixture: ComponentFixture<OwnerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
