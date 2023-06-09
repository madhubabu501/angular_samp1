import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotloginComponent } from './forgotlogin.component';

describe('ForgotloginComponent', () => {
  let component: ForgotloginComponent;
  let fixture: ComponentFixture<ForgotloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
