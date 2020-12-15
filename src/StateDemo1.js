import React from 'react';


class StateDemo1 extends React.Component{

    constructor()
    {
        super();
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
        this.state = {
             displayBio : false
        }
    }

    toggleDisplayBio()
    {
        this.setState({displayBio: !this.state.displayBio});
    }

  render(){
    return(
        <div>
            <h1>State Demo 2</h1>
           
           {/* Display Based on Toggle Value */}
           {
               this.state.displayBio ? (
                   <div>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                       <button onClick={this.toggleDisplayBio}>Show Less</button>
                   </div>
               ) : (
                <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
               )
           }
             

        </div>

    )
  }

}

export default StateDemo1;