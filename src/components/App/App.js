import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchResults = SearchResults;
    this.state = {
      playListName: 'Fuck you',
      playListTracks: {
        name: "",
        artist: "",
        album: "",
        id: ""
      }
    }
  }

  render() {
    return (<div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar/>
        <div class="App-playlist">
          <SearchResults/>
        <Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks}/>
        </div>
      </div>
    </div>);
  }
}

export default App;
