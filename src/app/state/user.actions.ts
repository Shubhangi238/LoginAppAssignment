import { Action } from '@ngrx/store';
import { User } from '../login/login.component';

export enum UserActionTypes {
  GET_USER = '[GET USER]',
  GET_USER_SUCCESS = '[GET_USER] SUCCESS',
  GET_USER_FAILURE = '[GET_USER] FAILURE',

  LOGIN = '[LOGIN]',
  LOGIN_SUCCESS = '[LOGIN] SUCCESS',
  LOGIN_FAILURE = '[LOGIN] FAILURE',

  LOGOUT = '[LOGOUT]',
  LOGOUT_SUCCESS = '[LOGOUT] SUCCESS',
  LOGOUT_FAILURE = '[LOGOUT] FAILURE',
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

export class Login implements Action {
  readonly type = UserActionTypes.LOGIN;
  constructor(
    public payload: {
      user: string;
    }
  ) {}
}
export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LOGIN_SUCCESS;
}
export class LoginFailure implements Action {
  readonly type = UserActionTypes.LOGIN_FAILURE;
}

export class Logout implements Action {
  readonly type = UserActionTypes.LOGOUT;
  constructor(
    public payload: {
      userId: number;
    }
  ) {}
}
export class LogoutSuccess implements Action {
  readonly type = UserActionTypes.LOGOUT_SUCCESS;
}
export class LogoutFailure implements Action {
  readonly type = UserActionTypes.LOGOUT_FAILURE;
}

export type UserActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | GetUser
  | GetUserSuccess
  | GetUserFailure
  | Logout
  | LogoutSuccess
  | LogoutFailure;
