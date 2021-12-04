import { combineReducers } from "redux";
import getWindow from "./windows";
import getBooks from "./books";
import getBook from "./book";
import getModalAdd from "./modalAdd";

const rootReducer = combineReducers({
    getWindow,
    getBooks,
    getBook,
    getModalAdd
})

export default rootReducer;