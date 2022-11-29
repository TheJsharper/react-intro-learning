import AppSongDetail from "./components/app.song-detail";
import SongList from "./components/app.song-list";


export function App() {
  return (
    <div className="ui container grid">

      <div className="ui row">

        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <AppSongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
