import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeguillaComponent } from './coleguilla.component';

describe('ColeguillaComponent', () => {
  let component: ColeguillaComponent;
  let fixture: ComponentFixture<ColeguillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeguillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeguillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
