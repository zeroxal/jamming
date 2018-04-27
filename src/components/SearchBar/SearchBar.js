
import React from 'react';
import './Searchbar.css'

export default class SearchBar extends React.Component{
constructor(props){
  super(props);

  this.search = this.search.bind(this);
  this.handleEvent = this.handleEvent.bind(this);
}


handleEvent(event) {
  this.setState({search: event.target.value})
}

search() {
  this.props.onSearch(this.state.search);
}


  render() {  return (
      <div className="SearchBar">
    <input onChange={this.handleEvent} placeholder="Enter A Song, Album, or Artist" />
  <a onClick={this.search}>SEARCH</a>
  </div>
    );}
  }
