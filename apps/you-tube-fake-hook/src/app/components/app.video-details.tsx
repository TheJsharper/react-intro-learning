import { Item } from "../models/app.youtube-api";

const VideoDetail = (props: { selectedVideo: Item | undefined }) => {

    const videoSrc= `https://youtube.com/embed/${props.selectedVideo?.id.videoId}`; 
    return (<div>

        <div className="ui embed">
            <iframe title={props.selectedVideo?.id.videoId} src={videoSrc} ></iframe>
        </div>
        <div className="ui segment">
            <h4 className="ui header">

                {props.selectedVideo?.snippet.title}
            </h4>
            <p>
                {props.selectedVideo?.snippet.description}
            </p>
        </div>
    </div>

    );
}

export default VideoDetail;