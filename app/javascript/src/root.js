import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
