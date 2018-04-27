import React from 'react';
import './Tracklist.css'

export default class Tracklist extends React.Component {
  render() {


    return (
    <div className="TrackList">

  {this.props.tracks.map(track => {return  (<track key={track.id} onAdd={this.props.onAdd}/>)})}

</div>);
}
}
