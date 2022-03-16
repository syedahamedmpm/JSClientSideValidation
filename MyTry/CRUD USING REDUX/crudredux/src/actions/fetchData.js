import * as http from '../api/api'
import { bookList } from './bookActions'
export function getbooks (){
    return dispatch => {
    http
    .booksGet("books")
    .then((resp)=>resp.json())
    .then(data =>{
      console.log(data)
      console.log(dispatch(bookList(data)))
      dispatch(bookList(data));
        return data;
    })
  }
}