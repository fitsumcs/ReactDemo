import React from 'react';

class App extends React.Component{

  // Multiple Line items need a wrapper 
  render(){
    let i = 1
    return(
      <div>
         <h1>Header !!</h1>
         <h2>Content</h2>
        <p data-myattribute="Some Value">This is the Content !!! </p>
        {/* Expression  */}
        <p>This is Expression Adding Two Numbers : {1 + 1}</p>
        <p>Conditional Statement => {i==1 ? "True" : "False"}</p>
      </div>
    );
  }
}

export default App;
