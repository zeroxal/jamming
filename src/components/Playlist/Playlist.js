

import React from 'react';
import './Playlist.css'
import TrackList from '../Tracklist/Tracklist.js';

export default class Playlist extends React.Component{
  render() {  return (
      <div class="Playlist">
        <input value="New Playlist"/>
      <TrackList/>
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
    );}
  }
