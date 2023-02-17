import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosesForYouComponent } from './choses-for-you.component';

describe('ChosesForYouComponent', () => {
  let component: ChosesForYouComponent;
  let fixture: ComponentFixture<ChosesForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosesForYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosesForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
