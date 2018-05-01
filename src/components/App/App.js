import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';
import OnSavePopup from '../onSavePopup/onSavePopup.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playListName: 'New Playlist',
      playListTracks: [],
      showPopup: false
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.closePopup = this.closePopup.bind(this)
  }

  addTrack(track) {
    if (this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    let newPlaylistTracks = this.state.playListTracks;
    newPlaylistTracks.push(track);
    this.setState({playListTracks: newPlaylistTracks});

    console.log(this.state.playListTracks);
  }

  removeTrack(track) {
    let newPlaylistTracks = this.state.playListTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playListTracks: newPlaylistTracks})
  }

  updatePlaylistName(name) {
    this.setState({playListName: name})
  }

  savePlaylist() {
    let trackURIs = this.state.playListTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playListName, trackURIs);
    if (this.state.playListTracks.length !== 0) {
    this.setState({showPopup: true})
  }
  }

  search(searchterm) {

    Spotify.searchSP(searchterm).then(tracks => {
      this.setState({searchResults: tracks});
    });
  }

  closePopup() {
    this.setState({showPopup: false});
    this.setState({playListName: 'New Playlist', playListTracks: []});
  }

  render() {
    return (<div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
          <Playlist onSave={this.savePlaylist} playListName={this.state.playListName} playListTracks={this.state.playListTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack}/>
        </div>

        {
          this.state.showPopup
            ? <OnSavePopup playListName={this.state.playListName} Playlistlength={this.state.playListTracks.length} closePopup={this.closePopup}/>
            : null
        }
      </div>
    </div>);
  }

}

export default App;
