import { BOOK_LIST } from "./types";


export const bookList = books =>({
type : BOOK_LIST,
payload :books
})