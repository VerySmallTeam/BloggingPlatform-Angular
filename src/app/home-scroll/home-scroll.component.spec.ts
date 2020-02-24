/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeScrollComponent } from './home-scroll.component';

describe('HomeScrollComponent', () => {
  let component: HomeScrollComponent;
  let fixture: ComponentFixture<HomeScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
