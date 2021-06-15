import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: User[] = [];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.todos);
  }

  async addUser(user: string): Promise<void> {
    const newTodo: User = {
      id: this.todos.length,
      user: user
    };

    this.todos = [...this.todos, newTodo];
  }

  async deleteUser(id: number): Promise<void> {
    this.todos = this.todos.filter((val) => val.id !== id);
  }
}
