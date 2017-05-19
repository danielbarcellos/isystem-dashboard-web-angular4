import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsystemGroupComponent } from './isystem-group.component';

describe('IsystemGroupComponent', () => {
  let component: IsystemGroupComponent;
  let fixture: ComponentFixture<IsystemGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsystemGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsystemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
