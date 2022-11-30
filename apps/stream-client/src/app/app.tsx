import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';

import Create from './components/stream/create';
import Detele from './components/stream/delete';
import Edit from './components/stream/edit';
import List from './components/stream/list';
import Show from './components/stream/show';

export function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={List} />
          <Route path="/new" exact component={Create} />
          <Route path="/edit" exact component={Edit} />
          <Route path="/delete" exact component={Detele} />
          <Route path="/show" exact component={Show} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
