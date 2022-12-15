import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDetailReactiveComponent } from './guest-detail-reactive.component';

describe('GuestDetailReactiveComponent', () => {
  let component: GuestDetailReactiveComponent;
  let fixture: ComponentFixture<GuestDetailReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestDetailReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestDetailReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
