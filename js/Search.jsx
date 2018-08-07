import React from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";
import { connect } from "react-redux";
import { setSearchTerm } from "./actions";

// const showList = data.shows.map(show => (
//   <ShowCard key={show.imdbID} {...show} />
// ));

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  showList(data) {
    const showlist = data.shows
    .filter(
      showitem =>
        `${showitem.title}${showitem.discription}`
          .toUpperCase()
          .indexOf(this.props.searchTerm.toUpperCase()) >= 0
    )
    .map(show => <ShowCard key={show.imdbID} {...show} />);
   
    return showlist;
  }

  render() {
    return (
      <div>
        <Header
          showSearch={true}
          handleSearchTermChange={this.props.handleSearchTermChange}
          searchTerm={this.props.searchTerm}
        />

        <div className="search"> <div> {this.showList(this.props)}</div></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export const UnWrapped = Search;
export default connect(mapStateToProps, mapDispatchToProps)(Search);
