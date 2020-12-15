import React from 'react';



class PropsDemo extends React.Component{



  render(){
    return(
      <div>
           <p > Welcome,  {this.props.name} !!</p>
      </div>
    )
  }

}

PropsDemo.defaultProps = {
  name : "System"
}


export default PropsDemo;