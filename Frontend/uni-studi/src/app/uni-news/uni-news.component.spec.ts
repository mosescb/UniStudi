import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniNewsComponent } from './uni-news.component';

describe('UniNewsComponent', () => {
  let component: UniNewsComponent;
  let fixture: ComponentFixture<UniNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
