import './ListBook.css';
import React from 'react';
import { connect } from "react-redux";
import setWindowAction from '../actions/actionWindow';
import setBookAction from '../actions/actionBook';

function Controls(props) {

    let objBook = props.obj

    function inFavorite(){
        objBook.favorite = 1
        props.setBookFunction(objBook)
    }

    function Delete(){
        objBook.favorite = 0
        props.setBookFunction(objBook)
    }

    function InfoBook(){
        props.setBookFunction(objBook)
        props.setWindowFunction("InfoBook")
    }
    
    return (
        <div className="book__control">
            <button onClick={inFavorite} className="button_F">F</button>
            <button onClick={Delete} className="button_D">D</button>
            <button onClick={InfoBook} className="button_I">I</button>
        </div>
    );
}

function mapDispatchToProps(dispatch){
    return {
        setWindowFunction: window => {
            dispatch(setWindowAction(window))
        },
        setBookFunction: book => {
            dispatch(setBookAction(book))
        }
    }
}

export default connect(null, mapDispatchToProps)(Controls);