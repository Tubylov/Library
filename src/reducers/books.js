const initialState = {
    books: null,
}

export default function getBooks(state = initialState, action){
    switch(action.type){
        
        case "SET_BOOKS":
            return { ...state, books: action.payload };
        default:
            return state;
    }
}