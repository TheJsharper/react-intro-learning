// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React from 'react';
import { UnsplashResponse } from './app.models';
import ImageList from './components/app.image-list';
import SearchBar from './components/app.search-bar';
import unsplashApiGet from './services/app.api.service';

export default class App extends React.Component<unknown, {unsplashResponse:UnsplashResponse|null }> {
  override state: { unsplashResponse:UnsplashResponse|null } = { unsplashResponse:null };

 async handleSubmitSearch(payload: string): Promise<void> {
    
    const responseData:UnsplashResponse|null = (await unsplashApiGet(payload)).data;
    console.log('====>x', payload, responseData);
    this.setState({ unsplashResponse: responseData});
  }
  override render(): React.ReactNode {
    return (
      <div className="ui container search-container">
        <SearchBar
          {...{ handleSubmitSearch: this.handleSubmitSearch.bind(this) }}

          />
          <ImageList {...{results:this.state.unsplashResponse?.results}}/>
      </div>
    );
  }
}
