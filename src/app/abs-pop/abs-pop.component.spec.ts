import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsPopComponent } from './abs-pop.component';

describe('AbsPopComponent', () => {
  let component: AbsPopComponent;
  let fixture: ComponentFixture<AbsPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
