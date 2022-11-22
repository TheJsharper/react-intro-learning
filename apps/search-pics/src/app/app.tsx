/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import axios, { AxiosError } from 'axios';
import React from 'react';
import { UnsplashResponse } from './app.models';
import ImageList from './components/app.image-list';
import LimitCallApi from './components/app.limit-call-api';
import Requirement from './components/app.requirement';
import SearchBar from './components/app.search-bar';
import unsplashApiGet, { isAccountAndEnvUnsplashCreated } from './services/app.api.service';

export default class App extends React.Component<unknown, { unsplashResponse: UnsplashResponse | null, ratelimitLimit: number, ratelimitRemaining: number }> {
  override state: { unsplashResponse: UnsplashResponse | null, ratelimitLimit: number, ratelimitRemaining: number } = { unsplashResponse: null, ratelimitLimit: -1, ratelimitRemaining: -100 };

  async handleSubmitSearch(payload: string): Promise<void> {
    try {

      const request = (await unsplashApiGet(payload));
      const responseData: UnsplashResponse | null = request.data;
      this.setState({ unsplashResponse: responseData });
    } catch (err: unknown | AxiosError) {
      if (axios.isAxiosError(err)) {

        const ratelimitLimit: number = parseInt(err!.config!.headers!['x-ratelimit-limit'] as string);
        const ratelimitRemaining: number = parseInt(err!.config!.headers!['x-ratelimit-remaining'] as string);
        this.setState({ ratelimitLimit, ratelimitRemaining });
      }
    }
  }

  hasDefinedEnvironments(): React.ReactNode {
    return (!isAccountAndEnvUnsplashCreated())
  }
  override render(): React.ReactNode {
    if (!isAccountAndEnvUnsplashCreated()) return (<Requirement />)
    if (this.state.ratelimitLimit === this.state.ratelimitRemaining) return (<LimitCallApi {...{ ratelimitLimit: this.state.ratelimitLimit, ratelimitRemaining: this.state.ratelimitRemaining }} />)
    return (
      <div className="ui container search-container">
        <SearchBar
          {...{ handleSubmitSearch: this.handleSubmitSearch.bind(this) }}

        />
        <ImageList {...{ results: this.state.unsplashResponse?.results }} />
      </div>
    );
  }
}
