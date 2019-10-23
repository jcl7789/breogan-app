import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUnitFormComponent } from './new-unit-form.component';

describe('NewUnitFormComponent', () => {
  let component: NewUnitFormComponent;
  let fixture: ComponentFixture<NewUnitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUnitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUnitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
