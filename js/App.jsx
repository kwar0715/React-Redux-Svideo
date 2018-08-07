import React from "react";
import { HashRouter, Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from '../data.json';
import {Provider} from 'react-redux'
import store from './store'

const FourNotFour = () => <h1> 404 </h1>;

const Detail =(props) =>{
  const show = preload.shows.find(show => (props.match.params.id === show.imdbID))
  return <Details show ={show}/> 
};

const showList = (data,term) => {

  return data.shows
    .filter(
      showitem =>
        `${showitem.title}`
          .toUpperCase()
          .indexOf(term.toUpperCase()) >= 0
    )
    .map(show => show );
}

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
      <div className="app">
          <Route exact path="/" component={Landing} />
          <Route exact path="/search/:searchterm" component={(props) =>  <Search imdbID={(preload,props.match.params.searchterm)} {...props}/>} />
          <Route exact path="/search" component={()=> <Search shows={preload.shows}/>} />
          <Route path="/details/:id" component={Detail} />
          
      </div>
      </Provider>
    </HashRouter>
  );
};

export default App;
