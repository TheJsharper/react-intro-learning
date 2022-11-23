import React from "react";
import SearchBar from "./components/app.search-bar";
import { Item, YoutubeResponseData } from "./models/app.youtube-api";
import youtubeApiGet from "./services/apis/app.service.api";
import { AxiosResponse } from 'axios';
import VideoList from "./components/app.video-list";

export interface AppState {
  youtubeResponseData: YoutubeResponseData | null;
  selectedVideo:Item |null;
}

export default class App extends React.Component<unknown, AppState> {

  override state: Readonly<AppState> = { youtubeResponseData: null,  selectedVideo:null };

  async onTermSubbmit(term: string): Promise<void> {
    const youtubeApiResponse: AxiosResponse<YoutubeResponseData> = await youtubeApiGet(term);
    this.setState({ youtubeResponseData: youtubeApiResponse.data, selectedVideo: youtubeApiResponse.data.items[0] });
  }

  onVideoSelect(video:Item):void{
    console.log("FROM THE APP", video);
  }

  override render(): React.ReactNode {
    return (
      <div className=" ui container">

        <SearchBar onFormSubmit={this.onTermSubbmit.bind(this)} />
        <VideoList {...{ videos: this.state.youtubeResponseData?.items, onVideoSelect:this.onVideoSelect.bind(this) }} />
      </div>);
  }
};
