import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatfactsComponent } from './catfacts.component';

describe('CatfactsComponent', () => {
  let component: CatfactsComponent;
  let fixture: ComponentFixture<CatfactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatfactsComponent]
    });
    fixture = TestBed.createComponent(CatfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
