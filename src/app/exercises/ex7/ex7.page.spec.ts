import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex7Page } from './ex7.page';

describe('Ex7Page', () => {
  let component: Ex7Page;
  let fixture: ComponentFixture<Ex7Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
