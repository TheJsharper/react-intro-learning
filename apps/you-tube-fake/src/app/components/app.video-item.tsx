import { Item } from "../models/app.youtube-api";
 import './app.video-item.module.scss';

export interface VideoItemProps {
    video: Item;
}
const VideoItem = (props: VideoItemProps) => {
    return (
        <div className="video-item-container item ">
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt="thund" />
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
        </div>
    );
}


export default VideoItem;