import { createStore, combineReducers } from 'redux';
import menuDrawer from './store/reducers/menuDrawer';

const rootReducer = combineReducers({
    menuDrawer: menuDrawer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());