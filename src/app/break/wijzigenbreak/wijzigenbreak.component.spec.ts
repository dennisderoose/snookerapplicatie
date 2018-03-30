/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WijzigenbreakComponent } from './wijzigenbreak.component';

describe('WijzigenbreakComponent', () => {
  let component: WijzigenbreakComponent;
  let fixture: ComponentFixture<WijzigenbreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijzigenbreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijzigenbreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
