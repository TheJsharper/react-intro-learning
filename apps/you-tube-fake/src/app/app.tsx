import React from "react";
import SearchBar from "./components/app.search-bar";
import { YoutubeResponseData } from "./models/app.youtube-api";
import youtubeApiGet from "./services/apis/app.service.api";
import { AxiosResponse } from 'axios';
import VideoList from "./components/app.video-list";

export interface AppState {
  youtubeResponseData: YoutubeResponseData | null;
}

export default class App extends React.Component<unknown, AppState> {

  override state: Readonly<AppState> = { youtubeResponseData: null };

  async onTermSubbmit(term: string): Promise<void> {
    const youtubeApiResponse: AxiosResponse<YoutubeResponseData> = await youtubeApiGet(term);
    console.log("===>", term, youtubeApiResponse);
    this.setState({ youtubeResponseData: youtubeApiResponse.data });
  }

  override render(): React.ReactNode {
    return (
      <div className=" ui container">

        <SearchBar onFormSubmit={this.onTermSubbmit.bind(this)} />
        <VideoList {...{ videos: this.state.youtubeResponseData?.items }} />
      </div>);
  }
};
