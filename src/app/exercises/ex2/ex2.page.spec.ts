import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex2Page } from './ex2.page';

describe('Ex2Page', () => {
  let component: Ex2Page;
  let fixture: ComponentFixture<Ex2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
