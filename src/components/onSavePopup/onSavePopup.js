import React from 'react';
import './onSavePopup.css';

export default class OnSavePopup extends React.Component {
render(){
  return(
    <div className='popup'>
      <div className='popup_inner'>
        <p>Your Playlist "{this.props.playListName}", which contains {this.props.Playlistlength} songs, has been saved successfully!</p>
      <a className='closeme' onClick={this.props.closePopup}>Close</a>
      </div>
    </div>
);
}
}
