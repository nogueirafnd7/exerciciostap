import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex9Page } from './ex9.page';

describe('Ex9Page', () => {
  let component: Ex9Page;
  let fixture: ComponentFixture<Ex9Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
