// eslint-disable-next-line @typescript-eslint/no-unused-vars

import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { UnsplashResponse } from './app.models';
import SearchBar from './components/app.search-bar';

export default class App extends React.Component<unknown, {unsplashResponse:UnsplashResponse|null }> {
  override state: { unsplashResponse:UnsplashResponse|null } = { unsplashResponse:null };

 async handleSubmitSearch(payload: string): Promise<void> {
    const urlBase: string = process.env['NX_UNSPLASH_API_BASE_URL'] as string;
    const clientId: string = process.env['NX_UNSPLASH_ACCESS_KEY'] as string;
    const data:Promise<AxiosResponse<UnsplashResponse>> = axios.get(`${urlBase}/search/photos`, {
      params:{query:payload},
      headers: {
        Authorization:`Client-ID ${clientId}`
      },
    });
    const responseData:UnsplashResponse|null = (await data).data;
    console.log('====>x', payload, urlBase, clientId, process.env, await data);
    this.setState({ unsplashResponse: responseData});
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
