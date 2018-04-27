

import React from 'react';
import './Playlist.css'
import TrackList from '../Tracklist/Tracklist.js';

export default class Playlist extends React.Component{
constructor(props){
  super(props);
}

handleNameChange(e){
this.props.onNameChange(e.target.value);
this.setState({inputValue: e.tartget.value})
}

  render() {  return (
      <div class="Playlist">
        <input value="New Playlist" onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playListTracks}  name={this.props.playListName} onRemove={this.props.onRemove} isRemoval={false}/>
    <a class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
    );}
  }
