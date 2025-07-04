import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTheme } from './add-theme';

describe('AddTheme', () => {
  let component: AddTheme;
  let fixture: ComponentFixture<AddTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
