import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  async addUser(user: string): Promise<void> {
    const newUser: User = {
      id: this.users.length,
      user
    };

    this.users = [...this.users, newUser];
  }

  async deleteUser(id: number): Promise<void> {
    this.users = this.users.filter((val) => val.id !== id);
  }
}
