import React from 'react';

class Track extends React.Components{
  render() {
    return(
      <div class="Track">
  <div class="Track-information">
    <h3>{this.props.track.name}</h3>
  <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a class="Track-action"><!-- + or - will go here --></a>
</div>
  )
  }
}
