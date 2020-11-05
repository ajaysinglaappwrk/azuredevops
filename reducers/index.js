import { combineReducers } from 'redux';
import { EmployerReducer } from '../reducers/employer-reducers';

const appReducer = combineReducers({
    EmployerReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer;
