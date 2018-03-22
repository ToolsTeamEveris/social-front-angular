import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeguillaAddComponent } from './coleguilla-add.component';

describe('ColeguillaAddComponent', () => {
  let component: ColeguillaAddComponent;
  let fixture: ComponentFixture<ColeguillaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeguillaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeguillaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
