import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorHistorietasComponent } from './contenedor-historietas.component';

describe('ContenedorHistorietasComponent', () => {
  let component: ContenedorHistorietasComponent;
  let fixture: ComponentFixture<ContenedorHistorietasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorHistorietasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorHistorietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
