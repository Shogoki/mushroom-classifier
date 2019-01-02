import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomHistoryComponent } from './mushroom-history.component';

describe('MushroomHistoryComponent', () => {
  let component: MushroomHistoryComponent;
  let fixture: ComponentFixture<MushroomHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MushroomHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
