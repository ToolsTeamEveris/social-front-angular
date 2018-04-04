import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorMisHistorietasComponent } from './contenedor-mis-historietas.component';

describe('ContenedorHistorietasComponent', () => {
  let component: ContenedorMisHistorietasComponent;
  let fixture: ComponentFixture<ContenedorMisHistorietasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorMisHistorietasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorMisHistorietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
