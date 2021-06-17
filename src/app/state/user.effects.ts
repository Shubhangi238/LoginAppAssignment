import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../user.service';
import {
  Login,
  LoginSuccess,
  LoginFailure,
  Logout,
  LogoutFailure,
  LogoutSuccess,
  GetUser,
  GetUserFailure,
  GetUserSuccess,
  UserActionTypes,
} from './user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private actions: Actions) {}

  public getUsers = createEffect(() => {
    return this.actions.pipe(
      ofType<GetUser>(UserActionTypes.GET_USER),
      mergeMap(() => {
        return this.userService.getUsers().pipe(
          map((users) => new GetUserSuccess({ users })),
          catchError(() => of(new GetUserFailure()))
        );
      })
    );
  });

  public login = createEffect(() => {
    return this.actions.pipe(
      ofType<Login>(UserActionTypes.LOGIN),
      mergeMap(async (action) => {
        return this.userService
          .login(action.payload.user)
          .then(() => new LoginSuccess())
          .catch(() => new LoginFailure());
      })
    );
  });

  public logout = createEffect(() => {
    return this.actions.pipe(
      ofType<Logout>(UserActionTypes.LOGOUT),
      mergeMap(async (action) => {
        return this.userService
          .logout(action.payload.userId)
          .then(() => new LogoutSuccess())
          .catch(() => new LogoutFailure());
      })
    );
  });
}
