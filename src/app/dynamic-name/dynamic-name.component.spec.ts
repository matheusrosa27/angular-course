import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNameComponent } from './dynamic-name.component';

describe('DynamicNameComponent', () => {
  let component: DynamicNameComponent;
  let fixture: ComponentFixture<DynamicNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicNameComponent]
    });
    fixture = TestBed.createComponent(DynamicNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
