import './Navigation.css';
import React from 'react';
import Icon from './Icons';

import { connect } from "react-redux";
import setWindowAction from '../actions/actionWindow';

function Navigation(props) {

    function onBookList(){
        props.setWindowFunction("BookList")
        return null
    }
    function onAddBook(){
        props.setWindowFunction("AddBook")
        return null
    }
    function onFavorite(){
        props.setWindowFunction("Favorite")
        return null
    }

    return (
        <nav>
            <div onClick={onBookList}><Icon name="BookList" width="25px" height="29px"/></div>
            <div onClick={onAddBook}><Icon name="AddBook" width="24px" height="28px"/></div>
            <div onClick={onFavorite}><Icon name="Favorite" width="24px" height="24px"/></div>
            <hr />
        </nav>
    );
  }

  function mapDispatchToProps(dispatch){
    return {
        setWindowFunction: window => {
            dispatch(setWindowAction(window))
        }
    }
  }
  
  export default connect(null, mapDispatchToProps)(Navigation);