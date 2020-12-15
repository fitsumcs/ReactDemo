import React from 'react';



class PropsandState extends React.Component{


    constructor(props)
    {
        super();
        this.state = {
             name : "Pass Data"
        }
    }

  render(){
    return(
      <div>
           <PropsPass jtp={this.state.name}/>
      </div>
    )
  }

}


//pass props
class PropsPass extends React.Component{



    render(){
      return(
        <div>
            <h3>State and Props Example</h3>
             <p > Welcome,  {this.props.jtp} !!</p>
        </div>
      )
    }
  
  }

export default PropsandState;