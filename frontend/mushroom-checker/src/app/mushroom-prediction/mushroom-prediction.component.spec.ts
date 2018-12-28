import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomPredictionComponent } from './mushroom-prediction.component';

describe('MushroomPredictionComponent', () => {
  let component: MushroomPredictionComponent;
  let fixture: ComponentFixture<MushroomPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MushroomPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
