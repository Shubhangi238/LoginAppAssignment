import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { UserEffects } from '../state/user.effects';
import { userReducer } from '../state/user.reducers';
import { LoginComponent } from '../login/login.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  RouterTestingModule.withRoutes([
    { path: 'login', component: LoginComponent}
  ])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [FormBuilder],
      imports: [ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                StoreModule.forRoot({ users: userReducer }) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    component.logout();
  });

});
