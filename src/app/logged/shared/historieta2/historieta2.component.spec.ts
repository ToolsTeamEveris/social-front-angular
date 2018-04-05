import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Historieta2Component } from './historieta2.component';

describe('Historieta2Component', () => {
  let component: Historieta2Component;
  let fixture: ComponentFixture<Historieta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Historieta2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Historieta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
