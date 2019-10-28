import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopPage } from './laptop.page';

describe('LaptopPage', () => {
  let component: LaptopPage;
  let fixture: ComponentFixture<LaptopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
