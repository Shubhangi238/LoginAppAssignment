import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UserState } from './user.reducers';

const userFeatureSelector = createFeatureSelector<UserState>('users');

export const getUsers = createSelector(
  userFeatureSelector,
  userAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  userFeatureSelector,
  (state) => state.loading
);

export const getError = createSelector(
  userFeatureSelector,
  (state) => state.error
);
