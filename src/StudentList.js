import React from 'react';


class StudentList extends React.Component{

    constructor()
    {
        super();
        this.state = {
            data : [
                {
                    "name" : "Student 1"
                },
                {
                    "name" : "Student 2"
                },
                {
                    "name" : "Student 3"
                }


            ]
        }
    }

  render(){
    return(
        <div>
      <ul>
          {this.state.data.map((item)=>   <li>{item.name}</li>  )}
      </ul>
        </div>

    )
  }

}

export default StudentList;