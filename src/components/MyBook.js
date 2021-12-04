import React from 'react';
import './ListBook.css';
import Controls from './Controls';

import { connect } from "react-redux"

function MyBook(props) {

    let bookInfo = props.myBook

    
    return (
        <li className="book">
            <div className="book__number">{props.number}</div>
            <div className="book__name">{bookInfo.title}</div>
            <Controls obj={bookInfo}/>
            <div className="book__favorite"></div>
        </li>
    );
}

function mapStateToProps(state){
    return {
        book: state.getBook.book
    }
  }

export default connect(mapStateToProps)(MyBook);