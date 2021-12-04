import React from 'react';
import './ListBook.css';
import Book from './Book';

import { connect } from "react-redux"

function ListBook(props) {

    function arrBooks(arr){
        let mass = []
        if(arr == null){
            return null
        }
            for (let i = 0; i < arr.length; i++) {
                mass.push(<Book key={i} number={i+1} book={arr[i]}/>);
            }
        return mass
    }

    return (
        <ul id="list_book" className="ListBook">
            {arrBooks(props.books)}
        </ul>
    );
}

function mapStateToProps(state){
    return {
      books: state.getBooks.books
    }
}

export default connect(mapStateToProps)(ListBook);