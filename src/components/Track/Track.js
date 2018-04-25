import React from 'react';

export default class Track extends React.Component{
constructor(props){
  super(props);

  this.renderAction = this.renderAction.bind(this);
  this.addTrack = this.addTrack.bind(this);
}
addTrack(){
  this.props.onAdd(this.props.track)
}

renderAction(){
  if (this.props.isRemoval === true) {
    return -;
  } else {
    return +;
  }
}

  render() {
    return(
      <div class="Track">
  <div class="Track-information">
    <h3>{this.props.track.name}</h3>
  <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action" onClick={this.addTrack}>{this.renderAction}</a>
</div>
  )
  }
}
