import React from 'react';
import './ListBook.css';

import { connect } from "react-redux";
import setModalAddAction from '../actions/actionModalAdd';

function Book(props) {

    let bookInfo = props.book
    
    function Add(){
        props.setModalAddFunction(props.number)
    }
    return (
        <li className="book">
            <div className="book__number">{props.number}</div>
            <div className="book__name">{bookInfo.volumeInfo.title}</div>
            <div className="book__control">
                <button className="button_ADD" onClick={Add}>ADD</button>
            </div>
            <div className="book__favorite"></div>
        </li>
    );
}

function mapDispatchToProps(dispatch){
    return {
        setModalAddFunction: modalAdd => {
            dispatch(setModalAddAction(modalAdd))
        }
    }
}

export default connect(null, mapDispatchToProps)(Book);