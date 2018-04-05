import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorietaComponent } from './historieta.component';

describe('HistorietaComponent', () => {
  let component: HistorietaComponent;
  let fixture: ComponentFixture<HistorietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
