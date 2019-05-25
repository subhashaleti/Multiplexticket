import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmenuComponent } from './foodmenu.component';

describe('FoodmenuComponent', () => {
  let component: FoodmenuComponent;
  let fixture: ComponentFixture<FoodmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
