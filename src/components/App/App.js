import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
<<<<<<< HEAD
=======
        {
          name: "",
          artist: "",
          album: "",
          id: ""
        }
>>>>>>> 2a821e11151d62abca44c8efae6e320f6dc4eb28
      ],
      playListName: [],
      playListTracks: [
<<<<<<< HEAD
      ],
=======
        {
          name: "",
          artist: "",
          album: "",
          id: ""
        }
      ]
>>>>>>> 2a821e11151d62abca44c8efae6e320f6dc4eb28
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    let newPlaylistTracks = this.state.playListTracks;
    newPlaylistTracks.push(track);
    this.setState({playListTracks: newPlaylistTracks});
  }

  removeTrack(track) {
<<<<<<< HEAD
    let newPlaylistTracks = this.state.playListTracks.filter(savedTrack => savedTrack.id !== track.id);
=======
    let newPlaylistTracks = this.state.playListTracks.filter(savedTrack => savedTrack.id === track.id);
>>>>>>> 2a821e11151d62abca44c8efae6e320f6dc4eb28
    this.setState({playListTracks: newPlaylistTracks})
  }

  updatePlaylistName(name) {
    this.setState({playListName: name})
  }

  savePlaylist() {
    let trackURIs = this.state.playListTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playListName, trackURIs);
    this.setState({playListName: 'New PLaylist', playListTracks: []});
  }

  search(searchterm) {
    Spotify.searchSP(searchterm).then(tracks => {
      this.setState({searchResults: tracks});
    });
<<<<<<< HEAD
=======

    console.log(searchterm);
    console.log(this.state.searchResults);
>>>>>>> 2a821e11151d62abca44c8efae6e320f6dc4eb28
  }

  render() {
    return (<div>
<<<<<<< HEAD
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
=======
      <h1>Ja<span className="highlight">mm</span>ing</h1>
>>>>>>> 2a821e11151d62abca44c8efae6e320f6dc4eb28
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
        <Playlist onSave={this.savePlaylist} playListName={this.state.playListName} playListTracks={this.state.playListTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack}/>
        </div>
      </div>
    </div>);
  }

}

export default App;
