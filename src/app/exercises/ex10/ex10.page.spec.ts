import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex10Page } from './ex10.page';

describe('Ex10Page', () => {
  let component: Ex10Page;
  let fixture: ComponentFixture<Ex10Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
