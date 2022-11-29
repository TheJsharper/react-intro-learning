
export interface AppState {
    selectedSong: Song;
    songs: Array<Song>;
}

export interface SongListProps {
    songs: Array<Song>;
    selectSong: (song: Song) => { type: string, payload: Song };
    selectedSong: Song | null;
}

export interface Song {
    title: string;
    duration: string;
}

export interface SongDetailProps {
    currentSong?: Song;
}