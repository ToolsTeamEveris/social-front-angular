import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCosasComponent } from './mis-cosas.component';

describe('MisCosasComponent', () => {
  let component: MisCosasComponent;
  let fixture: ComponentFixture<MisCosasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCosasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCosasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
