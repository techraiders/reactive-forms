import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluralsightComponent } from './pluralsight.component';

describe('PluralsightComponent', () => {
  let component: PluralsightComponent;
  let fixture: ComponentFixture<PluralsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluralsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluralsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
