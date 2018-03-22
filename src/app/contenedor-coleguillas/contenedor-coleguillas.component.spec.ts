import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorColeguillasComponent } from './contenedor-coleguillas.component';

describe('ContenedorColeguillasComponent', () => {
  let component: ContenedorColeguillasComponent;
  let fixture: ComponentFixture<ContenedorColeguillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorColeguillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorColeguillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
