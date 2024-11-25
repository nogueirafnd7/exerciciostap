import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex8Page } from './ex8.page';

describe('Ex8Page', () => {
  let component: Ex8Page;
  let fixture: ComponentFixture<Ex8Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
