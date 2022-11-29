import { AppState, SongDetailProps } from "../models/app.models";
import {connect} from 'react-redux';



const SongDetail = (props:SongDetailProps)=>{
     const {currentSong} = props;

    if(!currentSong) return (
        <div>

            <h1> Select a song for you</h1>
        </div>
    )
    return (
        <div>

            <h3> Detail for: </h3>
            <p>
                title: {props.currentSong?.title}
                Duration: {props.currentSong?.duration}
            </p>
        </div>
    )    ;
}

const mapStateToProps: (state:AppState)=> SongDetailProps  = (state:AppState)=>{
    return {currentSong:state.selectedSong}
}
export default  connect(mapStateToProps)( SongDetail);