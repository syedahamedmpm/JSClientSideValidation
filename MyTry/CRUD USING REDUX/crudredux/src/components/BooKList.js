import React from "react";
import { connect } from "react-redux";
import {getbooks} from '../actions/fetchData'

class BookList extends React.Component{
    constructor(){
        super();
    }
    componentDidMount() {
        console.log("I am working")
        this.props.dispatch(getbooks());
        
      }
      
    render(){
        const {books} = this.props;
        console.log(books)
        return(
            <div>
                {books.map(book =>(
                        <p key={book.id}>{book.id}.{book.booktittle} Written By {book.author}</p>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
  });

export default connect(
    mapStateToProps,
    null
) (BookList);