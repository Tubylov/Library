import React from 'react';
import './Modal.css';
import Icon from './Icons';

import { connect } from "react-redux"
import setModalAddAction from '../actions/actionModalAdd';

function AddBookModal(props) {

  let index = props.modalAdd - 1
  let bookInfo = props.book[index]
  let token = localStorage.getItem('token')
    let author = "нет данных"
    let description = "нет данны"

    let encoder = new TextEncoder();
    let id = encoder.encode(bookInfo.id)
    id = id.join('').substr(0, 9)

    if(bookInfo.volumeInfo.authors != null){
        author = bookInfo.volumeInfo.authors.join(' ')
        if(author.length > 100){
            author = author.substr(0, 100)
        }
    }
    if(bookInfo.volumeInfo.description != null){
        description = bookInfo.volumeInfo.description.substr(0, 117)
    }

  function Add(){
    const apiAdd = "https://internsapi.public.osora.ru/api/book/add"
    fetch(apiAdd, {
    method: 'POST',
    headers: {
    'Authorization': "Bearer " + token,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: bookInfo.volumeInfo.title,
        authors: author,
        description: description,
        favorite: 0,
        uid: id
    })
    })
    .then(res => res.json())
    .then(log => {
        console.log("Книга на добавление!", log)
        props.setModalAddFunction(-1)
    }).catch(function(error){
        console.log("Error!!!");
        console.log(error);
    });

  }

  function No(){
    props.setModalAddFunction(-1)
  }

  return (
    <div className="Modal">
        <div className="Modal__echo"></div>
        <div className="Modal__dialog">
            <h1>Add book</h1>
            <p>Are you sure you want to add this book?</p>
            <button className="button_YES" onClick={Add}>YES</button>
            <button className="button_NO" onClick={No}>NO</button>
            <div className="Modal__dialog__close" onClick={No}>
              <Icon name="Close" width="24px" height="24px"/>
            </div>
        </div>
    </div>
  );
}

function mapStateToProps(state){
  return {
    modalAdd: state.getModalAdd.modalAdd
  }
}

function mapDispatchToProps(dispatch){
  return {
      setModalAddFunction: modalAdd => {
          dispatch(setModalAddAction(modalAdd))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookModal);