import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AddUser,
  DeleteUser,
  GetUser,
} from '../state/user.actions';
import { UserState } from '../state/user.reducers';
import { getUsers } from '../state/user.selectors';
import {Router} from '@angular/router';

export interface User {
  id: number;
  user: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users: Observable<User[]>;

  loginform = new FormGroup ({ email: new FormControl(), password: new FormControl()});
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userStore: Store<UserState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userStore.dispatch(new GetUser());
    this.loginform = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.minLength(6), Validators.maxLength(20)]]
    });

    this.users = this.userStore.select(getUsers);
  }

  get email(): any { return this.loginform.get('email'); }

  get password(): any { return this.loginform.get('password'); }

  onLogin(): void {
    this.submitted = true;
    if (this.loginform.status === 'VALID') {
      localStorage.setItem('username', this.loginform.value.email);
      const user: string = this.loginform.value.email;
      this.userStore.dispatch(new AddUser({ user }));
      this.userStore.dispatch(new GetUser());
      this.router.navigateByUrl('/dashboard');
    }
  }

}
