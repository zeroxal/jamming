

import React from 'react';
import './Playlist.css'
import TrackList from '../Tracklist/Tracklist.js';

export default class Playlist extends React.Component{

handleNameChange(e){
this.props.onNameChange(e.target.value);
this.setState({inputValue: e.tartget.value})
}

  render() {  return (
      <div className="Playlist">
        <input value="New Playlist" onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playListTracks}  name={this.props.playListName} onRemove={this.props.onRemove} isRemoval={false}/>
    <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
    );}
  }
