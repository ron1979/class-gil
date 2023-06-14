import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargilComponent } from './targil.component';

describe('TargilComponent', () => {
  let component: TargilComponent;
  let fixture: ComponentFixture<TargilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TargilComponent]
    });
    fixture = TestBed.createComponent(TargilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
