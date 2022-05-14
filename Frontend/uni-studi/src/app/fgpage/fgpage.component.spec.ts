import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FGPageComponent } from './fgpage.component';

describe('FGPageComponent', () => {
  let component: FGPageComponent;
  let fixture: ComponentFixture<FGPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FGPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FGPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
