import React from 'react';
import StudentList  from './StudentList';
import StateDemo1  from './StateDemo1';

import PropsDemo  from './PropsDemo';

// import style.css stylesheet
import './style.css'

class Content extends React.Component{

  render(){
    let i = 1
    let style = {
      fontSize : 50 , 
      color : "red"
    }
    return(
      <div>
      <h2>Content</h2>
     <p data-myattribute="Some Value">This is the Content !!! </p>
     {/* Expression  */}
     <p>This is Expression Adding Two Numbers : {1 + 1}</p>
     <p>Conditional Statement = {i==1 ? "True" : "False"}</p>

     {/* Applying Inline Style  */}
     <p style={style}>Apply Inline Style </p>

     {/* List of Students  */}
     <h1 className="UnderLine">State Demo 1</h1>
     <StudentList />

     {/* State Demo 2*/}
     <h1 className="UnderLine">State Demo 2</h1>
     <StateDemo1 />

     {/* Props Demo */}
    <h1 className="UnderLine">Props Demo</h1>
    <PropsDemo  name = "Alex"/>
    <PropsDemo  />
   </div>
    )
  }



}

export default Content;
