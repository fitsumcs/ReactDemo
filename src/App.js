import React from 'react';
import Header from './Header';
import Content from './Content';

// import style.css stylesheet
import './style.css'

class App extends React.Component{

  // Multiple Line items need a wrapper 
  render(){

    return(
      <div className="myStyle">
         <Header />
         <Content />
      </div>
    );
  }
}


export default App;
