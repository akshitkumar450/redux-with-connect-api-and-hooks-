import { createSelector } from 'reselect'

export const getCount = (state) => state.count.counter;
export const getName = (state) => state.naam.name;