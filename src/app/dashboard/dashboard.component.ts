import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AddUser,
  DeleteUser,
  GetUser,
} from '../state/user.actions';
import { UserState } from '../state/user.reducers';
import { getUsers } from '../state/user.selectors';

export interface User {
  id: number;
  user: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: any[] = [];
  username: any;
  public users: Observable<User[]>;
  userData: any;
  email: any;

  constructor(private router: Router,
              private userStore: Store<UserState>) { }

  ngOnInit(): void {
    this.userStore.dispatch(new GetUser());
    this.users = this.userStore.select(getUsers);
    this.userStore.select(getUsers).subscribe(data => this.userData = data);
    console.log('this.userData', this.userData);
    this.email = this.userData[0]?.user;
    this.username = this.email?.substring(0, this.email.indexOf('@'));
    this.employees = [{
      name: this.username,
      profile: 'Developer',
      place: 'India'
    }];
  }

  logout() {
    this.userStore.dispatch(new DeleteUser({ userId: this.userData[0]?.id }));
    this.router.navigateByUrl('/login');
  }

}
