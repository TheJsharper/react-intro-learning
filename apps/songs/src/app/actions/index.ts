import { Song } from "../models/app.models";


export  const selectSong :(song: Song)=>{type:string, payload:Song} = (song:Song)=>{
    return {
        type: "SONG_SELECTED",
        payload: song
    };
}

