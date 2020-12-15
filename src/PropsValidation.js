import React from 'react';

import PropTypes from 'prop-types';

// import style.css stylesheet
import './style.css'

class PropsValidation extends React.Component {

    render() {
        return ( 
            <div>

                <h2 className="UnderLine">React Js Props Validation !!</h2>
          
          <table >
            <tr>
                <th>Type</th>
                <th>Value</th>
                <th>Valid</th>
            </tr>
            <tr>
               <td>Array</td>
               <td>{this.props.propArray}</td>
               <td>{this.props.propArray ? "True" : "False"}</td>
            </tr>
            <tr>
               <td>Boolean</td>
               <td>{this.props.propBool ? "True" : "False"}</td>
               <td>{this.props.propBool ? "True" : "False"}</td>
            </tr>
            <tr>
               <td>Function</td>
               <td>{this.props.propFunc(5)}</td>
               <td>{this.props.propFunc ? "True" : "False"}</td>
            </tr>
            <tr>
               <td>String</td>
               <td>{this.props.propString}</td>
               <td>{this.props.propString ? "True" : "False"}</td>
            </tr>
            <tr>
               <td>Number</td>
               <td>{this.props.propNumber}</td>
               <td>{this.props.propNumber ? "True" : "False"}</td>
            </tr>


         </table>

            </div> 
           
        )
    }

}

//prop types 
PropsValidation.propTypes = {
    propArray : PropTypes.array.isRequired,
    propBool : PropTypes.bool.isRequired,
    propFunc : PropTypes.func,
    propNumber : PropTypes.number,
    propString : PropTypes.string
}

//prop Default 
PropsValidation.defaultProps = {
    propArray : [1,2,3,4],
    propBool : true,
    propFunc : function(x){return x+5},
    propNumber : 1,
    propString : "My Name"
}



export default PropsValidation;