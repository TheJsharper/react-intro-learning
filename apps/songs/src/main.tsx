import * as ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/app';
import reducers from './app/reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
