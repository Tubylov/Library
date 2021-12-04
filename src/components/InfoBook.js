import React from 'react';
import './App.css';
import './InfoBook.css';
import Navigation from './Navigation';

import { connect } from "react-redux"

function InfoBook(props) {
    return (
        <main>
            <header>
                <h1>Library - Info</h1>
            </header>
            <section>
                <div className="InfoBook">
                    <h1>{props.book.title}</h1>
                    <div className="InfoBook__authors">
                        <span className="InfoBook__author">{props.book.authors}</span>
                    </div>
                    <div className="InfoBook__content">
                        {props.book.description}
                    </div>
                </div>
            </section>
            <Navigation />
        </main>
    );
  }

  function mapStateToProps(state){
    return {
        book: state.getBook.book
    }
  }
  
  export default connect(mapStateToProps)(InfoBook);