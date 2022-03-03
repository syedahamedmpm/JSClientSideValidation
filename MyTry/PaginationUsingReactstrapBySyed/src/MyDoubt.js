import React, { Component } from 'react';

class MyDoubt extends Component{
    constructor(){
        super();
        this.state={
          year :10
        }
      }
      render(){
          const myne=12;
          const {year}=this.state;
          return(
            <div>
                {
                    [...Array(year)].map((yr,i)=>(
                        <p>{yr}.{i+1}</p>
                    ))
                }
            </div>

          )
      }
}
export default MyDoubt;