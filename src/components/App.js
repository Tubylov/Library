import React from 'react';
import './App.css';
import { useState} from 'react';
import ShowWindow from './ShowWindow';

import { connect } from "react-redux"

function App(props) {

  return (
    <div className="App">
      <ShowWindow nameWindow={props.window}/>
    </div>
  );
}

function mapStateToProps(state){
  return {
    window: state.getWindow.window
  }
}

export default connect(mapStateToProps)(App);
