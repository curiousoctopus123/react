import './index.css';

const Album = (props) => {
  const {
    albumKey,
    album: {
      name
    },
    onClick,
    selected,
  } = props;

  function onAlbumClick() {
    if (selected === albumKey) {
      onClick(null);
    } else {
      onClick(albumKey)
    }
  }

  const classes = `Album ${selected === albumKey ? 'selected' : ''}`; 

  return (
    <div className={classes} onClick={onAlbumClick}>
      <img src={`/react/assets/${albumKey}.jpg`} alt={name}/>
    </div>
  )
};

export default Album;