import { AxiosResponse } from 'axios';
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from '../assets/images/yt-logo.svg';
import SearchBar from "./components/app.search-bar";
import VideoDetail from "./components/app.video-details";
import VideoList from "./components/app.video-list";
import { Item, YoutubeResponseData } from "./models/app.youtube-api";
import youtubeApiGet from "./services/apis/app.service.api";


const App = () => {
  const [youtubeResponseData, setYoutubeResponseData] = useState<YoutubeResponseData | null>(null);

  const [selectedVideo, setSelectedVideo] = useState<Item | null>(null);

  useEffect(() =>{ (async ()=>await onTermSubmit('ReactJs'))()}, []);

  const onTermSubmit: (term: string) => Promise<void> = async (term: string) => {

    const youtubeApiResponse: AxiosResponse<YoutubeResponseData> = await youtubeApiGet(term);

    setYoutubeResponseData(youtubeApiResponse.data);
    
    setSelectedVideo(youtubeApiResponse.data.items[0]);
  }

  
   return (
    <div className=" ui container">
      <Logo  style={{width:'10%', height:'10%'}}/>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">

            <VideoDetail {...{ selectedVideo: selectedVideo }} />
          </div>

          <div className="five wide column">

            <VideoList {...{ videos: youtubeResponseData?.items, onVideoSelect: setSelectedVideo }} />
          </div>
        </div>
      </div>
    </div>);

};
export default App;