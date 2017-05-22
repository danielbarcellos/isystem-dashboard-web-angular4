import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstatusMonitorComponent } from './istatus-monitor.component';

describe('IstatusMonitorComponent', () => {
  let component: IstatusMonitorComponent;
  let fixture: ComponentFixture<IstatusMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstatusMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstatusMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
