// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React from 'react';
import SearchBar from './components/app.search-bar';
import axios from 'axios';

export default class App extends React.Component<unknown, { term: string }> {
  override state: { term: string } = { term: '' };

  handleSubmitSearch(payload: string): void {
    //event.preventDefault();
    const urlBase: string = process.env['NX_UNSPLASH_API_BASE_URL'] as string;
    const clientId: string = process.env['NX_ACCESS_KEY'] as string;
   // const secretToken: string = process.env['SECRET_KEY'] as string;
    /*const data = axios.get(`${urlBase}/search/photos`, {
      params:{query:payload},
      headers: {
        Authorization:`Client-ID ${clientId}`
      },
    });*/
    console.log('====>x', payload, urlBase, clientId, process.env);
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
