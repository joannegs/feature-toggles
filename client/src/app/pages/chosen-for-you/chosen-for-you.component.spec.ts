import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenForYouComponent } from './chosen-for-you.component';

describe('ChosenForYouComponent', () => {
  let component: ChosenForYouComponent;
  let fixture: ComponentFixture<ChosenForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenForYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
