import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarHistorietaComponent } from './publicar-historieta.component';

describe('PublicarHistorietaComponent', () => {
  let component: PublicarHistorietaComponent;
  let fixture: ComponentFixture<PublicarHistorietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarHistorietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarHistorietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
