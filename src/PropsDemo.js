import React from 'react';



class PropsDemo extends React.Component{



  render(){
    return(
      <div>
           <h1 > Welcome,  {this.props.name} !!</h1>
      </div>
    )
  }

}

PropsDemo.defaultProps = {
  name : "System"
}


export default PropsDemo;