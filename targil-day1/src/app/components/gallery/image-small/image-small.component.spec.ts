import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSmallComponent } from './image-small.component';

describe('ImageSmallComponent', () => {
  let component: ImageSmallComponent;
  let fixture: ComponentFixture<ImageSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSmallComponent]
    });
    fixture = TestBed.createComponent(ImageSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
