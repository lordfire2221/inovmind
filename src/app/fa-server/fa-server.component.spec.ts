import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaServerComponent } from './fa-server.component';

describe('FaServerComponent', () => {
  let component: FaServerComponent;
  let fixture: ComponentFixture<FaServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaServerComponent]
    });
    fixture = TestBed.createComponent(FaServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
