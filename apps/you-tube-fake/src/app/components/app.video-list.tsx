import { Item } from "../models/app.youtube-api";
import VideoItem from "./app.video-item";


export interface VideoListProps {
    videos: Item[] | undefined;
}
const VideoList = (props: VideoListProps) => {

   const values:JSX.Element[] | undefined = props.videos?.map((video:Item)=>(<VideoItem  key={video.id.videoId}  {...{video}}  />));

    return (<div className="ui relaxed divided list">
        {values}
    </div>);
}


export default VideoList;