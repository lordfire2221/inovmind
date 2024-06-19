import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpHostingComponent } from './wp-hosting.component';

describe('WpHostingComponent', () => {
  let component: WpHostingComponent;
  let fixture: ComponentFixture<WpHostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WpHostingComponent]
    });
    fixture = TestBed.createComponent(WpHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
