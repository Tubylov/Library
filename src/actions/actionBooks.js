export default function setBooksAction(books){
    return{
        type: "SET_BOOKS",
        payload: books
    }
}