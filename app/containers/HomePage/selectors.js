/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectItem = () =>
    createSelector(
        selectHome,
        homeState => homeState.answers,
    );

const makeSelectType = () =>
    createSelector(
        selectHome,
        homeState => homeState.selected,
    );

export { selectHome, makeSelectUsername, makeSelectItem, makeSelectType };
