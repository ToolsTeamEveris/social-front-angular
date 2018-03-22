import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHistorietasComponent } from './mis-historietas.component';

describe('MisHistorietasComponent', () => {
  let component: MisHistorietasComponent;
  let fixture: ComponentFixture<MisHistorietasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisHistorietasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisHistorietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
