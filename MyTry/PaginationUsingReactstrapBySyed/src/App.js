import React, { Component } from 'react';
import Paginating from './Components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      year : [],
      pageSize : 10,
      currentPage:0
    }
  }

componentDidMount() {
  const loopyear=[]
    for (var i = 1; i <= 100; i++) {
      loopyear.push(i);
    }
    this.setState({
      year:loopyear
    })
}
handleonPageChange=(index)=>{
  this.setState({
    currentPage:index,
  })
  console.log(this.state.currentPage)

}
  render(){
    return(
      <div>
        {this.state.year
            .slice(
              this.state.currentPage * this.state.pageSize,
              (this.state.currentPage + 1) * this.state.pageSize
              )
            .map((data, i) => 
              <div className="data-slice" key={i}>
                {data}
              </div>
            )}
        
          <Paginating
          NoOfValuesInArray={this.state.year.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handleonPageChange}
          currentPage={this.state.currentPage}
          />
      </div>
    );
  }
}

export default App;
