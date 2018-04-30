import React from 'react';
import './Searchbar.css'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    this.search = this.search.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleEvent(event) {
    this.setState({search: event.target.value})
    localStorage.setItem('SearchTerm', event.target.value)
  }

  search() {
    this.props.onSearch(localStorage.getItem('SearchTerm'));
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onSearch(localStorage.getItem('SearchTerm'));
    }
  }
  render() {
    return (<div className="SearchBar">
      <input value={localStorage.getItem('SearchTerm')} onChange={this.handleEvent} placeholder="Enter A Song, Album, or Artist" onKeyPress={this.handleKeyPress}/>
      <a onClick={this.search}>SEARCH</a>
    </div>);
  }
}
