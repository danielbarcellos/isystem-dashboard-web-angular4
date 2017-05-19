import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsystemGroupContentComponent } from './isystem-group-content.component';

describe('IsystemGroupContentComponent', () => {
  let component: IsystemGroupContentComponent;
  let fixture: ComponentFixture<IsystemGroupContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsystemGroupContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsystemGroupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
