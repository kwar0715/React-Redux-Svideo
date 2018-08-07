// create title element
import React from 'react'
import {render} from 'react-dom'

/*const MyTitle = function(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { color: props.color }, id: props.title },
      props.title
    )
  );
};

const MyFirstComponant = function() {
  return React.createElement(
    "div",
    null,
    React.createElement(MyTitle, { title: " prop1", color: "Green" }),
    React.createElement(MyTitle, { title: " prop2", color: "GreenYellow" }),
    React.createElement(MyTitle, { title: " prop3", color: "Red" }),
    React.createElement(MyTitle, { title: " prop4", color: "Lime" })
  );
};*/


// const MyTitle = function(props){
//   const style = {color: props.color}
//   return(
//     <div>
//       <h1 style={style}>{props.title}</h1>
//     </div>
//   );
// }

// const MyFirstComponant = function(){
//   return(
//     <div>
//       <MyTitle title="props 1" color="Red"/>
//       <MyTitle title="props 2" color="Lime"/>
//       <MyTitle title="props 3" color="green"/>
//       <MyTitle title="props 4" color="blue"/>
//     </div>
//   )
// }

// render(
//   <MyFirstComponant/>,
//   document.getElementById("app")
// );
