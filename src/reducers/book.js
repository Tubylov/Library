const initialState = {
    book: null,
}

export default function getBook(state = initialState, action){
    switch(action.type){
        
        case "SET_BOOK":
            return { ...state, book: action.payload };
        default:
            return state;
    }
}