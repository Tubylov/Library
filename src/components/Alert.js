import React from 'react';
import './Alert.css';
import Icon from './Icons';

function Alert({textError}) {
  return (
    <div className="Alert">
        <Icon name="Warning" width="100%" height="100%"/>
        <p>{textError}</p>
    </div>
  );
}

export default Alert;