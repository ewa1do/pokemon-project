import { combineReducers } from '@reduxjs/toolkit';
import { eventsReducer } from './eventsReducer';
import { UIReducer } from './UIReducer';

export const rootReducer = combineReducers({
  events: eventsReducer,
  UI: UIReducer,
});
