import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedServerHostingComponent } from './dedicated-server-hosting.component';

describe('DedicatedServerHostingComponent', () => {
  let component: DedicatedServerHostingComponent;
  let fixture: ComponentFixture<DedicatedServerHostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DedicatedServerHostingComponent]
    });
    fixture = TestBed.createComponent(DedicatedServerHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
