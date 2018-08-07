import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const listItem = data => (
  
      <WrapperDropDownItem to={`/details/${data.imdbID}`}>{data.title}</WrapperDropDownItem>

);

const WrapperDropDown = styled.div`
    position: absolute;
    background-color: #f6f6f6;
    
    border: 1px solid #ddd;
    z-index: 1;
    width:30.7%;
`;

const WrapperDropDownItem = styled(Link)`
    color: black;
    padding: 9px 16px;
    text-decoration: none;
    display: flex;
`;

const SearchList = props => {
  let componant;
  if (props.searchtext !== "") {
    componant = props.shows
      .filter(show =>
        show.title.toUpperCase().startsWith(props.searchtext.toUpperCase())
      )
      .map(show => listItem(show));
  }

  return (
      
    <WrapperDropDown>
      {componant}
      </WrapperDropDown>
  );
};

SearchList.defaultProps = {
  searchtext: ""
};

export default SearchList;
