import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHostingComponent } from './shared-hosting.component';

describe('SharedHostingComponent', () => {
  let component: SharedHostingComponent;
  let fixture: ComponentFixture<SharedHostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedHostingComponent]
    });
    fixture = TestBed.createComponent(SharedHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
