// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React from 'react';
import SearchBar from './components/app.search-bar';



export default class App extends React.Component {
  handleSubmitSearch(event: React.SyntheticEvent):void{
    event.preventDefault();
    console.log("====>x", event);
  }
  override render(): React.ReactNode {
    return (
      <div className="ui container search-container">
        <SearchBar {...{handleSubmitSearch:this.handleSubmitSearch}} />
      </div>
    );
  }
}
