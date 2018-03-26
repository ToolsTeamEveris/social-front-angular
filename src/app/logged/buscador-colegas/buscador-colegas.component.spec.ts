import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorColegasComponent } from './buscador-colegas.component';

describe('BuscadorColegasComponent', () => {
  let component: BuscadorColegasComponent;
  let fixture: ComponentFixture<BuscadorColegasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorColegasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorColegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
