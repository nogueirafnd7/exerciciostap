import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex6Page } from './ex6.page';

describe('Ex6Page', () => {
  let component: Ex6Page;
  let fixture: ComponentFixture<Ex6Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
