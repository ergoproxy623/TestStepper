import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIncrementControlComponent } from './custom-increment-control.component';

describe('CustomIncrementControlComponent', () => {
  let component: CustomIncrementControlComponent;
  let fixture: ComponentFixture<CustomIncrementControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomIncrementControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIncrementControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
