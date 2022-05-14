import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FGDashboardComponent } from './fgdashboard.component';

describe('FGDashboardComponent', () => {
  let component: FGDashboardComponent;
  let fixture: ComponentFixture<FGDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FGDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FGDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
