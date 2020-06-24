import { combineReducers } from 'redux';
import analysis from './analysis';
import feedback from './feedback';
import script from './script';
import suggestions from './suggestions';

const rootReducer = combineReducers({
	analysis,
	feedback,
	script,
	suggestions
});

export default rootReducer;