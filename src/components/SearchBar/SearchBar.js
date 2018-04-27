
import React from 'react';
import './Searchbar.css'

export default class SearchBar extends React.Component{
constructor(props){
  super(props);
  this.state = {search: ""}

  this.search = this.search.bind(this);
  this.handleEvent = this.handleEvent.bind(this);
}

search(){
  this.props.onSearch(this.state.search);
}

handleEvent(e){
  this.setState = {search: e.target.value}
}

  render() {  return (
      <div class="SearchBar">
    <input onChange={this.handleEvent} placeholder="Enter A Song, Album, or Artist" />
  <a onClick={this.search}>SEARCH</a>
  </div>
    );}
  }
