import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from './Reducer/RootReducer';

const Store = createStore(
	RootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof RootReducer>;

export default Store;
