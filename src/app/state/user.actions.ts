import { Action } from '@ngrx/store';
import { User } from '../login/login.component';

export enum UserActionTypes {
  GET_USER = '[GET USER]',
  GET_USER_SUCCESS = '[GET_USER] SUCCESS',
  GET_USER_FAILURE = '[GET_USER] FAILURE',

  ADD_USER = '[ADD USER]',
  ADD_USER_SUCCESS = '[ADD_USER] SUCCESS',
  ADD_USER_FAILURE = '[ADD_USER] FAILURE',

  DELETE_USER = '[DELETE USER]',
  DELETE_USER_SUCCESS = '[DELETE_USER] SUCCESS',
  DELETE_USER_FAILURE = '[DELETE_USER] FAILURE',
}

export class GetUser implements Action {
  readonly type = UserActionTypes.GET_USER;
}
export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_SUCCESS;
  constructor(
    public payload: {
      users: User[];
    }
  ) {}
}
export class GetUserFailure implements Action {
  readonly type = UserActionTypes.GET_USER_FAILURE;
}

export class AddUser implements Action {
  readonly type = UserActionTypes.ADD_USER;
  constructor(
    public payload: {
      user: string;
    }
  ) {}
}
export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.ADD_USER_SUCCESS;
}
export class AddUserFailure implements Action {
  readonly type = UserActionTypes.ADD_USER_FAILURE;
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(
    public payload: {
      userId: number;
    }
  ) {}
}
export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DELETE_USER_SUCCESS;
}
export class DeleteUserFailure implements Action {
  readonly type = UserActionTypes.DELETE_USER_FAILURE;
}

export type UserActions =
  | AddUser
  | AddUserSuccess
  | AddUserFailure
  | GetUser
  | GetUserSuccess
  | GetUserFailure
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFailure;
