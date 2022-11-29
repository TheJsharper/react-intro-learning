import { combineReducers } from 'redux';
import { Song } from '../models/app.models';



export const songsReducer = () => {
    return [
        {
            title: 'No Scrubs', duration: '4:05',
        },
        {
            title: 'Macarena', duration: '2:30',
        },
        {
            title: 'All Star', duration: '3:15',
        },
        {
            title: 'I want it That way', duration: '1:45',
        },
    ]
}

export const selectedSongReducer = (selectedSong: Song | null = null, action: { type: string, payload: Song }) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})