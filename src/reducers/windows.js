const initialState = {
    window: "Registration",
}

export default function getWindow(state = initialState, action){
    switch(action.type){
        
        case "SET_WINDOW":
            return { ...state, window: action.payload };
        default:
            return state;
    }
}