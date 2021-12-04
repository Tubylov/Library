const initialState = {
    modalAdd: -1,
}

export default function getModalAdd(state = initialState, action){
    switch(action.type){
        
        case "SET_MODALADD":
            return { ...state, modalAdd: action.payload };
        default:
            return state;
    }
}