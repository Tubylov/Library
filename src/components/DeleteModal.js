import React from 'react';
import './Modal.css';

function DeleteModal() {
  return (
    <div className="Modal">
        <div className="Modal__echo"></div>
        <div className="Modal__dialog">
            <h1>Delete book</h1>
            <p>Are you sure you want to delete this book?</p>
            <button className="button_YES">YES</button>
            <button className="button_NO">NO</button>
            <div className="Modal__dialog__close"></div>
        </div>
    </div>
  );
}

export default DeleteModal;