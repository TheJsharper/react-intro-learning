import { useState } from 'react';
import Accordion from "./components/app.accordion";
import Dropdown from "./components/app.dropdown";
import Header from './components/app.header';
import Route from "./components/app.route";
import Search from "./components/app.search";
import Translate, { options, Options } from "./components/app.translate";
import { getItems } from "./services/app.wiki.service";




export function App() {

  const [selected, setSelected] = useState<Options>(options[0]);
  return (
    <div>
        <Header />
      <Route path="/" >
        <Accordion {...{items: getItems()}}  />
      </Route>
      <Route path="/list" >
       
        <Search />
      </Route>
      <Route path="/dropdown" >
        <Dropdown {...{ options, selected, setSelected, label: 'Select a language' }} />
      </Route>
      <Route path="/translate" >
        <Translate />
      </Route>
    </div>
  
  )
}

export default App;
