import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InrfoColegaComponent } from './inrfo-colega.component';

describe('InrfoColegaComponent', () => {
  let component: InrfoColegaComponent;
  let fixture: ComponentFixture<InrfoColegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InrfoColegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InrfoColegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
