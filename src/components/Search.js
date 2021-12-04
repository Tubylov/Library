import React from 'react';
import './Search.css';
import SearchIcon from './SearchIcon';
import ClearIcon from './ClearIcon';

import { connect } from "react-redux";
import setBooksAction from '../actions/actionBooks';

function Search(props) {

  function Clear(){
    document.getElementById('search').value = "";
    props.setBooksFunction(null)
  }

  function getBooks(){

    let text = document.getElementById('search').value;
    if(text != ""){
      let apiAdd = "https://www.googleapis.com/books/v1/volumes?q=" + text;
      fetch(apiAdd)
      .then(res => res.json())
      .then(add => {
          console.log("Книги загружены!", add.items)
          props.setBooksFunction(add.items)
      }).catch(function(error){
          console.log("Error!!!");
          console.log(error);
      });
    }else{
      props.setBooksFunction(null)
    }
  }

  return (
    <div className="Search">
        <input id="search" type="text" onInput={getBooks}/>
        <div className="Search__img">
          <SearchIcon />
        </div>
        <div className="Search__clear" onClick={Clear}>
          <ClearIcon />
        </div>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
      setBooksFunction: books => {
          dispatch(setBooksAction(books))
      }
  }
}

export default connect(null, mapDispatchToProps)(Search);