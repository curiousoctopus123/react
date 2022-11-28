import './index.css';
import data from '../../data.json';

const Song = (props) => {
  const {
    song,
    onSongAdd,
  } = props;

  const {
    name, album, listens, duration, good, released
  } = song;

  const { albums } = data;
  const albumName = albums[album].name;

  let durationString = `${Math.floor(duration / 60)}:`;
  const seconds = duration % 60;
  if (seconds < 10) {
    durationString += `0${seconds}`;
  } else {
    durationString += seconds;
  }

  function onClick() {
    onSongAdd(song)
  }

  const goodString = good ? '👍' : '🤢';

  return (
    <div className="Song" onClick={onClick}>
      <div className="left">
        <img className="album" src={`/react/assets/${album}.jpg`} alt={albumName}/>
        <p className="name">{name}</p>
        <p className="name">{goodString}</p>
      </div>
      <div className="right">
      <p className="listens">{listens}</p>
      <p className="duration">{durationString}</p>
      <p className="released">{released}</p>
      <img className="add" src='/react/assets/add.png' alt="Add"></img>
      </div>
    </div>
  )
}

export default Song;