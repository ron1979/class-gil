import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBigComponent } from './image-big.component';

describe('ImageBigComponent', () => {
  let component: ImageBigComponent;
  let fixture: ComponentFixture<ImageBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageBigComponent]
    });
    fixture = TestBed.createComponent(ImageBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
