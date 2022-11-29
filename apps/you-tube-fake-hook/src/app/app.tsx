import React from "react";
import SearchBar from "./components/app.search-bar";
import { Item, YoutubeResponseData } from "./models/app.youtube-api";
import youtubeApiGet from "./services/apis/app.service.api";
import { AxiosResponse } from 'axios';
import VideoList from "./components/app.video-list";
import VideoDetail from "./components/app.video-details";
import { ReactComponent as Logo } from '../assets/images/yt-logo.svg';

export interface AppState {
  youtubeResponseData: YoutubeResponseData | null;
  selectedVideo: Item | null;
}

export default class App extends React.Component<unknown, AppState> {

  override state: Readonly<AppState> = { youtubeResponseData: null, selectedVideo: null };


  override componentDidMount(): void {
      this.onTermSubbmit('ReactJs');
  }

  async onTermSubbmit(term: string): Promise<void> {
    const youtubeApiResponse: AxiosResponse<YoutubeResponseData> = await youtubeApiGet(term);
    this.setState({ youtubeResponseData: youtubeApiResponse.data, selectedVideo: youtubeApiResponse.data.items[0] });
  }

  onVideoSelect(video: Item): void {
    this.setState({ selectedVideo: video });
  }

  override render(): React.ReactNode {
    return (
      <div className=" ui container">
        <Logo  style={{width:'10%', height:'10%'}}/>
        <SearchBar onFormSubmit={this.onTermSubbmit.bind(this)} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">

              <VideoDetail {...{ selectedVideo: this.state.selectedVideo }} />
            </div>

            <div className="five wide column">

              <VideoList {...{ videos: this.state.youtubeResponseData?.items, onVideoSelect: this.onVideoSelect.bind(this) }} />
            </div>
          </div>
        </div>
      </div>);
  }
};
