import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex4Page } from './ex4.page';

describe('Ex4Page', () => {
  let component: Ex4Page;
  let fixture: ComponentFixture<Ex4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
