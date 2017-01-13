import { combineReducers } from 'redux';

import TickBoxReducer from './TickBoxReducer'
import ToggleReducer from './ToggleReducer'
import RadioReducer from './RadioReducer'


export default combineReducers({
    TickBox : TickBoxReducer,
    Toggle : ToggleReducer,
    Radio : RadioReducer
});
