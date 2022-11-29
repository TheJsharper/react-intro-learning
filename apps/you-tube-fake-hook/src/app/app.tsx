import { useEffect, useState } from "react";
import { ReactComponent as Logo } from '../assets/images/yt-logo.svg';
import SearchBar from "./components/app.search-bar";
import VideoDetail from "./components/app.video-details";
import VideoList from "./components/app.video-list";
import UseVideo from './hooks/app.use-video';
import { Item } from "./models/app.youtube-api";


const App = () => {


  const [selectedVideo, setSelectedVideo] = useState<Item | undefined>(undefined);

  const { youtubeResponseData, search } = UseVideo('ReactJS');

  useEffect(() => setSelectedVideo(youtubeResponseData?.items[0]), [youtubeResponseData]);



  return (
    <div className=" ui container">
      <Logo style={{ width: '10%', height: '10%' }} />
      <SearchBar onFormSubmit={search} />
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