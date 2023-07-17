import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchedPage } from './sched.page';

describe('SchedPage', () => {
  let component: SchedPage;
  let fixture: ComponentFixture<SchedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SchedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
