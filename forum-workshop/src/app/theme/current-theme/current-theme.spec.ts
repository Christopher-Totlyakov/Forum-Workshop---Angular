import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTheme } from './current-theme';

describe('CurrentTheme', () => {
  let component: CurrentTheme;
  let fixture: ComponentFixture<CurrentTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
