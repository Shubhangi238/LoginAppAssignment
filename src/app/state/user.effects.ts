import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../user.service';
import {
  AddUser,
  AddUserFailure,
  AddUserSuccess,
  DeleteUser,
  DeleteUserFailure,
  DeleteUserSuccess,
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

  public addUser = createEffect(() => {
    return this.actions.pipe(
      ofType<AddUser>(UserActionTypes.ADD_USER),
      mergeMap(async (action) => {
        return this.userService
          .addUser(action.payload.user)
          .then(() => new AddUserSuccess())
          .catch(() => new AddUserFailure());
      })
    );
  });

  public deleteUser = createEffect(() => {
    return this.actions.pipe(
      ofType<DeleteUser>(UserActionTypes.DELETE_USER),
      mergeMap(async (action) => {
        return this.userService
          .deleteUser(action.payload.userId)
          .then(() => new DeleteUserSuccess())
          .catch(() => new DeleteUserFailure());
      })
    );
  });
}
