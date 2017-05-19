import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsystemStatusComponent } from './isystem-status.component';

describe('IsystemStatusComponent', () => {
  let component: IsystemStatusComponent;
  let fixture: ComponentFixture<IsystemStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsystemStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsystemStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
