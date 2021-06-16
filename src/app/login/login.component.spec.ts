import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [FormBuilder],
      imports: [ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                StoreModule.forRoot({}) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    component.onLogin();
    expect(component.submitted).toBeTruthy();
  });

  it('should check login form status as VALID', () => {
    component.loginform.controls['email'].setValue('xyz@gmail.com');
    component.loginform.controls['password'].setValue('1234567');
    component.onLogin();
    expect(component.loginform.status).toEqual('VALID');
  });

  it('should check login form status as INVALID', () => {
    component.loginform.controls['email'].setValue('xyz');
    component.loginform.controls['password'].setValue('123');
    component.onLogin();
    expect(component.loginform.status).toEqual('INVALID');
  });
});
