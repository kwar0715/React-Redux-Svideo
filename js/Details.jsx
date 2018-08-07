import React from "react";
import Header from "./Header";
import Spinner from "./Spinner";
import {getApiData} from './actions'
import { connect } from "react-redux";

class Details extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(!this.props.rating){
      this.props.getApiData();
    }
  }


  render() {
    const { title, year, description, poster, imdbID, trailer } = this.props.show;

    let ComponantRating ;
    if(this.props.rating === ''){
      ComponantRating = <Spinner/>;
    }else{
      ComponantRating = <h3> {this.props.rating} </h3>
    }


    return (
      <div>
        <Header />
        <div className='details'>

          <h1> {title} </h1>
          <h2>({year})</h2>
          {ComponantRating}
          <br/>
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Trailer For ${title}`}
          />
          <p>{description}</p>
          <iframe
            src={`https://www.youtube.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

const mapStatesToProps =(state,ownprops)=>{
  const apiData = state.apiData[ownprops.show.imdbID] ? state.apiData[ownprops.show.imdbID] : {}

  return {
    rating: apiData.rating
  }
}

const mapDispatchToProps =(dispatch, ownprops)=>({
  getApiData(){
    dispatch(getApiData(ownprops.apiData.imdbID))
  }
})

export default connect(mapStatesToProps,mapDispatchToProps)(Details);
