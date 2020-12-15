import React from 'react';

class App extends React.Component{

  // Multiple Line items need a wrapper 
  render(){

    return(
      <div>
         <Header />
         <Content />
      </div>
    );
  }
}

class Header extends React.Component{

  render(){
    return(
      <div>
           <h1>Header !!</h1>
      </div>
    )
  }

}

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
     <p style={style}>Apply Style </p>
   </div>
    )
  }

}

export default App;
