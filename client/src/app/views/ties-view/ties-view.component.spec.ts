import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiesViewComponent } from './ties-view.component';

describe('TiesViewComponent', () => {
  let component: TiesViewComponent;
  let fixture: ComponentFixture<TiesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
