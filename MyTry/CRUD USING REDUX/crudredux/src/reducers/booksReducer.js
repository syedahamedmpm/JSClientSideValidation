import {BOOK_LIST} from '../actions/types'

const initialstate = {
    books:[]
};

const booksReducer = (state = initialstate,action) =>{
    var { books } = state;
switch(action.type){
    case BOOK_LIST:
    return {
        ...state,
        books : action.payload
        
    };
    default:
    return {...state};
}
}
export default booksReducer;