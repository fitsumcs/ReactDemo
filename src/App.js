import React from 'react';

class App extends React.Component{

  // Multiple Line items need a wrapper 
  render(){
    return(
      <div>
         <h1>Header !!</h1>
         <h2>Content</h2>
        <p data-myattribute="Some Value">This is the Content !!! </p>
      </div>
    );
  }
}

export default App;
