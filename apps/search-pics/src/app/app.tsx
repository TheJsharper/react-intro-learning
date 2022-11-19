// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React from 'react';
import SearchBar from './components/app.search-bar';

export default class App extends React.Component<unknown, { term: string }> {
  override state: { term: string } = { term: '' };

  handleSubmitSearch(payload:string): void {
    //event.preventDefault();
    console.log('====>x', payload);
    this.setState({ term: 'next value' });
  }
  override render(): React.ReactNode {
    return (
      <div className="ui container search-container">
        <SearchBar
          {...{ handleSubmitSearch: this.handleSubmitSearch.bind(this) }}
        />
      </div>
    );
  }
}
