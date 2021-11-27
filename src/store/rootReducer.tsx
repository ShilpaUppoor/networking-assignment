import { combineReducers } from 'redux';
import connectionReducer from './connectionReducer';

const rootReducer = combineReducers({
    connection: connectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
