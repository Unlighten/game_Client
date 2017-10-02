import {NEW_PROFILE} from '../actions/types';

const INITIAL_STATE = { all: [], pprof: null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case NEW_PROFILE:
			return {...state, pprof: action.payload.data};
		default:
			return state;
	}
}