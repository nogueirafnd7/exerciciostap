import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex5Page } from './ex5.page';

describe('Ex5Page', () => {
  let component: Ex5Page;
  let fixture: ComponentFixture<Ex5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
