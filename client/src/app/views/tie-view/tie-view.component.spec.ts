import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TieViewComponent } from './tie-view.component';

describe('TieViewComponent', () => {
  let component: TieViewComponent;
  let fixture: ComponentFixture<TieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
