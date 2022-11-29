import React from "react";
import { connect } from 'react-redux';
import { selectSong } from "../actions";
import { AppState, Song, SongListProps } from "../models/app.models";


class SongList extends React.Component<SongListProps> {


    private renderList(): Array<JSX.Element> {
        return this.props.songs.map((song: Song, _: number) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={ ()=> this.props.selectSong(song)} className="ui button primary"> Select</button>
                        </div>

                    <div className="content">
                        {song.title}
                    </div>    
                </div>
            )
        })
    }

    override render(): React.ReactNode {
        return (
            <div className="ui divided list">
                <h1>My Songs</h1>
                {this.renderList()}

            </div>
        );
    }
}


const mapStateToProps: (State: AppState) => SongListProps = (state: AppState) => {
    return { songs: state.songs, selectSong, selectedSong:null  };
}

export default connect(mapStateToProps, {selectSong})(SongList);
