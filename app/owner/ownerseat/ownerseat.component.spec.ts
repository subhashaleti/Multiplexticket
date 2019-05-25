import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerseatComponent } from './ownerseat.component';

describe('OwnerseatComponent', () => {
  let component: OwnerseatComponent;
  let fixture: ComponentFixture<OwnerseatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerseatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
