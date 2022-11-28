import data from '../../data.json';
import Album from '../Album';
import './index.css';

const Filters = (props) => {
  const {
    selectedAlbum,
    setSelectedAlbum,
    onlyGoodSongs,
    setOnlyGoodSongs,
    sortBy,
    setSortBy,
  } = props;

  const { albums } = data;

  const albumKeys = Object.keys(albums);

  function onAlbumClick(album) {
    setSelectedAlbum(album)
  }

  function onCheckboxChange(e) {
    console.log(e.target.checked);
    setOnlyGoodSongs(e.target.checked);
  }

  function onSelectChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="Filters">
      <p>Select an album</p>
      <div className="albums">
        {albumKeys.map((albumKey) => (
          <Album
            key={albumKey}
            albumKey={albumKey}
            album={albums[albumKey]}
            selected={selectedAlbum}
            onClick={onAlbumClick}
          />
        ))}
      </div>
      <div className="row">
        <div className="left">
          <input type="checkbox" value={onlyGoodSongs} onChange={onCheckboxChange} />
          <p className="checkbox">Actually good songs only</p>
        </div>
        <div className="right">
          <p className="select">Sort by</p>
          <select onChange={onSelectChange} value={sortBy}>
            <option value="date-released">Date released</option>
            <option value="listens">Listens</option>
          </select>
        </div>
      </div>
    </div>
  )
};

export default Filters;