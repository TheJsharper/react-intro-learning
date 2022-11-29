import { Item } from "../models/app.youtube-api";
 import './app.video-item.module.scss';

export interface VideoItemProps {
    video: Item;
    onVideoSelect: (selectedVideo:Item)=>void
}
const VideoItem: (props: VideoItemProps) => JSX.Element = (props: VideoItemProps) => {
    return (
        <div onClick={()=> props.onVideoSelect(props.video)} className="video-item-container item ">
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description}/>
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
        </div>
    );
}


export default VideoItem;