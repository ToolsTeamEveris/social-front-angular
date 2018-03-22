import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorColeguitasComponent } from './buscador-coleguitas.component';

describe('BuscadorColeguitasComponent', () => {
  let component: BuscadorColeguitasComponent;
  let fixture: ComponentFixture<BuscadorColeguitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorColeguitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorColeguitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
