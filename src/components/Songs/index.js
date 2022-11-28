import './index.css';
import Song from '../Song';
import Filters from '../Filters';
import data from '../../data.json';
import { useState } from 'react';

const Songs = (props) => {
  const { onSongAdd } = props;
  const { songs } = data;
  const [ selectedAlbum, setSelectedAlbum ] = useState(null);
  const [ onlyGoodSongs, setOnlyGoodSongs ] = useState(false);
  const [ sortBy, setSortBy ] = useState('date-released');

  const filteredAndSortedSongs = songs
    .filter((song) => {
      if (selectedAlbum !== null) {
        if (song.album !== selectedAlbum) {
          return false;
        }
      }
      if (onlyGoodSongs) {
        if (!song.good) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "listens":
          return b.listens - a.listens;
        default:
          return b.released - a.released;
      }
    });

  return (
    <div className="Songs">
      <Filters
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
        onlyGoodSongs={onlyGoodSongs}
        setOnlyGoodSongs={setOnlyGoodSongs}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="songs">
        {filteredAndSortedSongs.map((song) => (
          <Song key={song.name} song={song} onSongAdd={onSongAdd} />
        ))}
      </div>
    </div>
  );
}

export default Songs;
