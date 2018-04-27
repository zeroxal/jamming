

import React from 'react';
import './Playlist.css'
import TrackList from '../Tracklist/Tracklist.js';

export default class Playlist extends React.Component{
<<<<<<< HEAD
=======
constructor(props){
  super(props);
}
>>>>>>> 8302dbba49b9e1407ba866ff9d65131f18be538d

handleNameChange(e){
this.props.onNameChange(e.target.value);
this.setState({inputValue: e.tartget.value})
}

  render() {  return (
<<<<<<< HEAD
      <div className="Playlist">
        <input value="New Playlist" onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playListTracks}  name={this.props.playListName} onRemove={this.props.onRemove} isRemoval={false}/>
    <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
=======
      <div class="Playlist">
        <input value="New Playlist" onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playListTracks}  name={this.props.playListName} onRemove={this.props.onRemove} isRemoval={false}/>
    <a class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
>>>>>>> 8302dbba49b9e1407ba866ff9d65131f18be538d
    </div>
    );}
  }
