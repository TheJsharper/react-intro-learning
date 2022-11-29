import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './app/app';
import reducers from './app/reducers';


const store = createStore(reducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>

    <App />
  </Provider>

);
