import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourShadeComponent } from './find-your-shade.component';

describe('FindYourShadeComponent', () => {
  let component: FindYourShadeComponent;
  let fixture: ComponentFixture<FindYourShadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindYourShadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindYourShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
