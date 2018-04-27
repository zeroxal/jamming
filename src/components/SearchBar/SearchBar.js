
import React from 'react';
import './Searchbar.css'

export default class SearchBar extends React.Component{
constructor(props){
  super(props);
<<<<<<< HEAD
=======
  this.state = {search: ""}
>>>>>>> 8302dbba49b9e1407ba866ff9d65131f18be538d

  this.search = this.search.bind(this);
  this.handleEvent = this.handleEvent.bind(this);
}

<<<<<<< HEAD

handleEvent(event) {
  this.setState({search: event.target.value})
}

search() {
  this.props.onSearch(this.state.search);
}


  render() {  return (
      <div className="SearchBar">
=======
search(){
  this.props.onSearch(this.state.search);
}

handleEvent(e){
  this.setState = {search: e.target.value}
}

  render() {  return (
      <div class="SearchBar">
>>>>>>> 8302dbba49b9e1407ba866ff9d65131f18be538d
    <input onChange={this.handleEvent} placeholder="Enter A Song, Album, or Artist" />
  <a onClick={this.search}>SEARCH</a>
  </div>
    );}
  }
