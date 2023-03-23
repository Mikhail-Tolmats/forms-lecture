import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneReactiveInputComponent } from './standalone-reactive-input.component';

describe('StandaloneReactiveInputComponent', () => {
  let component: StandaloneReactiveInputComponent;
  let fixture: ComponentFixture<StandaloneReactiveInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneReactiveInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneReactiveInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
