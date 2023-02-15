import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeComponent } from './shade.component';

describe('ShadeComponent', () => {
  let component: ShadeComponent;
  let fixture: ComponentFixture<ShadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
