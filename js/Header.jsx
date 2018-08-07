import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  let utilspace;

  if (props.showSearch == true) {
    utilspace = (
      <input
        onChange={props.handleSearchTermChange}
        type="text"
        placeholder="Search"
        value={props.searchTerm}
      />
    );
  } else {
    utilspace = (
      <h2>
        <Link to="/search"> Back </Link>
      </h2>
    );
  }

  return (
    <header>
      <h1>
        <Link to="/">
          S video
        </Link>
      </h1>
      {utilspace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange : function noop () {},
  searchTerm : ''
};

export default Header;
