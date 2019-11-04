import { combineReducers } from 'redux';
import { trails } from './trails';
import { bookings } from './bookings';


export const rootReducer = combineReducers({
  trails,
  bookings,
});
