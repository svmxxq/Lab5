import { createStore, applyMiddleware } from 'redux';    //мидлуэр
import { thunk } from 'redux-thunk';    // для работы с асинхронными действиями.
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;