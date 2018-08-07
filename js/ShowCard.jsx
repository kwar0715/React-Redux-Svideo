import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    width: 30%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
    
`;

const WrapperImage = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;
`;

const WrapperPara = styled.p`
    font-size : 12px;
    text-align: left;
`;

const ShowCard = props => (
  <Wrapper className="show-card">
    <Link to={`details/${props.imdbID}`}>
      <WrapperImage
        src={"/public/img/posters/" + props.poster}
        alt={props.title + "Show Poster"}
      />
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <WrapperPara>{props.description}</WrapperPara>
    </Link>
  </Wrapper>
);

export default ShowCard;
