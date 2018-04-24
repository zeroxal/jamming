import React from 'react';
import './Tracklist.css'

export default class Tracklist extends React.Component {
  render() {
    this.props.tracks.map(track => {return track{return  <track key=track.id/>}})

    return (<div class="TrackList"></div>);
  }
}
