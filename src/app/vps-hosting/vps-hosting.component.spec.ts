import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpsHostingComponent } from './vps-hosting.component';

describe('VpsHostingComponent', () => {
  let component: VpsHostingComponent;
  let fixture: ComponentFixture<VpsHostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VpsHostingComponent]
    });
    fixture = TestBed.createComponent(VpsHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
