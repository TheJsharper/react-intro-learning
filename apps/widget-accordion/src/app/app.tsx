import { useState } from "react";
import Dropdown from "./components/app.dropdown";

const options: Array<Options> = [

  {
    label: ' The Color Red',
    value: 'red'
  },
  {
    label: ' The Color Green',
    value: 'green'
  },
  {
    label: ' The Color Blue',
    value: 'blue'
  },
]

export interface Options {
  label: string; value: string;

}


export function App() {
  const [selected, setSelected] = useState<Options>(options[0])
  return (
    <div className="ui container">
      <Dropdown {...{ options, selected, setSelected }} />
    </div>
  );
}

export default App;
