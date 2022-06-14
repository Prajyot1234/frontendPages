import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordIdComponent } from './reset-password-id.component';

describe('ResetPasswordIdComponent', () => {
  let component: ResetPasswordIdComponent;
  let fixture: ComponentFixture<ResetPasswordIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
