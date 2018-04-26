import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      searchResults: [{
        name: "Hi",
        artist: "I am",
        album: "Josef",
        id: "1"
      }],
      playListName: 'Hi',
      playListTracks: [{
=======
      searchResults: {
        name: "Hi",
        artist: "I am",
        album: "Gay",
        id: "1"
      },
      playListName: 'Fuck you',
      playListTracks: {
>>>>>>> 932609cb12534cc3a1b5cb65d9fc6d6e43af9e71
        name: "",
        artist: "",
        album: "",
        id: "",
<<<<<<< HEAD
      }]
=======
      }
>>>>>>> 932609cb12534cc3a1b5cb65d9fc6d6e43af9e71
    };

  this.addTrack = this.addTrack.bind(this);

}

addTrack(track) {
  if (this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  } else {
    this.state.playListTracks.add({track})
  }
}

render() {
  return (<div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar/>
      <div className="App-playlist">
        <SearchResults onAdd={this.addTrack()} searchResults={this.state.searchResults}/>
        <Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks}/>
      </div>
    </div>
  </div>);
}
}

export default App;
