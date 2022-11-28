import './App.css';
import Songs from './components/Songs';
import Queue from './components/Queue';
import { useState } from 'react';

function App() {

  const [queue, setQueue] = useState([]);

  function onSongAdd(song) {
    setQueue([
      ...queue,
      song
    ])
  }

  function onEntryRemove(index) {
    setQueue([
      ...queue.slice(0, index),
      ...queue.slice(index + 1),
    ]);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>YUNG GRAVY HITS</h1>
      </div>
      <div className="content">
        <Queue queue={queue} onEntryRemove={onEntryRemove} />
        <Songs onSongAdd={onSongAdd} />
      </div>
    </div>
  );
}

export default App;
