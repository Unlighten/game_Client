import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import profReducer from './profile_reducer';

const rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	prof: profReducer
});

export default rootReducer;