import './index.css';
import data from '../../data.json';

const Song = (props) => {
  const {
    song,
    onSongAdd,
  } = props;

  const {
    name, album, listens
  } = song;

  const { albums } = data;
  const albumName = albums[album].name;

  function onClick() {
    onSongAdd(song)
  }

  return (
    <div className="Song" onClick={onClick}>
      <div className="left">
        <img className="album" src={`/assets/${album}.jpg`} alt={albumName}/>
        <p className="name">{name}</p>
      </div>
      <div className="right">
        <p className>{listens}</p>
        <img className="add" src='/assets/add.png' alt="Add"></img>
      </div>
    </div>
  )
}

export default Song;