import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisColegasComponent } from './mis-colegas.component';

describe('MisColegasComponent', () => {
  let component: MisColegasComponent;
  let fixture: ComponentFixture<MisColegasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisColegasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisColegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
