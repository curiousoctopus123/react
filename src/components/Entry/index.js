import './index.css';
import data from '../../data.json';

const Entry = (props) => {
  const {
    entry: {
      name, album
    },
    onEntryRemove,
    index,
  } = props;

  const { albums } = data;
  const albumName = albums[album].name;

  function onClick() {
    onEntryRemove(index);
  }

  return (
    <div className="Entry" onClick={onClick}>
      <div className="left">
        <img className="album" src={`/react/assets/${album}.jpg`} alt={albumName}/>
        <p className="name">{name}</p>
      </div>
      <div className="right">
        <img className="remove" src='/react/assets/remove.png' alt="Remove"></img>
      </div>
    </div>
  )
}

export default Entry;