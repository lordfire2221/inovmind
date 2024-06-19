import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedWpHostingComponent } from './shared-wp-hosting.component';

describe('SharedWpHostingComponent', () => {
  let component: SharedWpHostingComponent;
  let fixture: ComponentFixture<SharedWpHostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedWpHostingComponent]
    });
    fixture = TestBed.createComponent(SharedWpHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
