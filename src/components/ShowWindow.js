import React from 'react';
import Registration from './Registration';
import Login from './Login';
import AddBook from './AddBook';
import BookList from './BookList';
import Favorite from './Favorite';
import InfoBook from './InfoBook';

function ShowWindow({nameWindow}) {

    switch(nameWindow){
        case 'Registration':
            return <Registration />
        case 'Login':
            return <Login />
        case 'AddBook':
            return <AddBook/>
        case 'BookList':
            return <BookList/>
        case 'Favorite':
            return <Favorite/>
        case 'InfoBook':
            return <InfoBook/>
        default:
            return null
    }
}

export default ShowWindow;