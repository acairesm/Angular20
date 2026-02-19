import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Naoencontrado } from './naoencontrado';

describe('Naoencontrado', () => {
  let component: Naoencontrado;
  let fixture: ComponentFixture<Naoencontrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Naoencontrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Naoencontrado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
