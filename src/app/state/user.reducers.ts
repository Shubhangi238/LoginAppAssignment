import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../login/login.component';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState extends EntityState<User> {
  loading: boolean;
  error: string;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const userDefaultState: UserState = {
  ids: [],
  entities: {},
  loading: false,
  error: '',
};

export const initialState: UserState = userAdapter.getInitialState(
  userDefaultState
);

export function userReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.GET_USER: {
      return { ...state, loading: true };
    }
    case UserActionTypes.GET_USER_SUCCESS: {
      return userAdapter.setAll(action.payload.users, {
        ...state,
        loading: false,
      });
    }
    case UserActionTypes.GET_USER_FAILURE: {
      return { ...state, loading: false, error: 'XXX' };
    }

    case UserActionTypes.LOGIN: {
      return { ...state, loading: true };
    }
    case UserActionTypes.LOGIN_SUCCESS: {
      return { ...state, loading: false };
    }
    case UserActionTypes.LOGIN_FAILURE: {
      return { ...state, loading: false, error: 'XXX' };
    }

    case UserActionTypes.LOGOUT: {
      return { ...state, loading: true };
    }
    case UserActionTypes.LOGOUT_SUCCESS: {
      return { ...state, loading: false };
    }
    case UserActionTypes.LOGOUT_FAILURE: {
      return { ...state, loading: false, error: 'XXX' };
    }

    default:
      return state;
  }
}
