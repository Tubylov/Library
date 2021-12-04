import React from 'react';
import './App.css';
import Search from './Search';
import Navigation from './Navigation';
import ListBook from './ListBook';
import AddBookModal from './AddBookModal';

import { connect } from "react-redux"

function AddBook(props) {
    return (
        <main>
            <header>
                <Search />
            </header>
            <section>
                <ListBook />
                {(props.modalAdd != -1) ? <AddBookModal book={props.books}/> : null}
            </section>
            <Navigation />
        </main>
    );
  }

  function mapStateToProps(state){
    return {
      modalAdd: state.getModalAdd.modalAdd,
      books: state.getBooks.books
    }
  }
  
  export default connect(mapStateToProps)(AddBook);