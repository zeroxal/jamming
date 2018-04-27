

import React from 'react';
import './Playlist.css'
import TrackList from '../Tracklist/Tracklist.js';

export default class Playlist extends React.Component{

  constructor(props) {
     super(props);
     this.handleNameChange = this.handleNameChange.bind(this);
   }

handleNameChange(e){
this.props.onNameChange(e.target.value);
this.setState({inputValue: e.target.value});
}

  render() {  return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playListTracks}  onRemove={this.props.onRemove} isRemoval={true}/>
    <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
    );}
  }
