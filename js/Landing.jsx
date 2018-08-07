import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import SearchList from "./SearchList";
import { connect } from "react-redux";
import { setSearchTerm } from "./actions";

// use @connect(mapStateProps) decorator
/*
class Landing extends React.Component {
  state = {
    searchTerm: ""
  };

  handleSearchKeyPress = keyevent => {
    if (keyevent.key == "Enter") {
      this.state.searchTerm = data.shows
        .filter(show =>
          show.title
            .toUpperCase()
            .startsWith(keyevent.target.value.toUpperCase())
        )
        .map(show => show);
      if (this.state.searchTerm.length == 1) {
        this.props.history.push(`/details/${this.state.searchTerm[0].imdbID}`);
      } else {
        this.props.history.push(`/search/${keyevent.target.value}`);
      }
    }
  };

  render() {
    return (
      <div className="landing">
        <h1> S video</h1>

        <input
          placeholder="search"
          type="text"
          onChange={ev => this.setState({ searchTerm: event.target.value })}
          onKeyPress={this.handleSearchKeyPress}
        />

        <SearchList searchtext={this.state.searchTerm} {...data} />
        <Link to="/search"> or Browse All</Link>
      </div>
    );
  }
}*/

// let state = {
//   searchTerm: "A"
// };

const Landing = props => (
  <div className="landing">
    <h1> s video</h1>

    <input
      placeholder="search"
      type="text"
      onChange={props.handleSearchTermChange}
      onKeyPress={e => (e.key === "Enter" ? props.history.push("/search") : {})}
      value ={props.searchTerm }
    />

    <SearchList searchtext={props.searchTerm} {...data} />
    <Link to="/search"> or Browse All</Link>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
