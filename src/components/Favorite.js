import React from 'react';
import './App.css';
import Navigation from './Navigation';
import { useState, useEffect } from 'react';
import MyBook from './MyBook';
import DeleteModal from './DeleteModal';

function Favorite() {

    const [loaded, setLoaded] = useState([]);

    function arrMyBooks(arr){
        let mass = []
        for (let i = 0; i < arr.length; i++) {
            mass.push(<MyBook key={i} number={i+1} myBook={arr[i]}/>);
        }
        return mass
    }

    useEffect(() => {
        let token = localStorage.getItem('token')
        const api = "https://internsapi.public.osora.ru/api/book/list"
        fetch(api, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(obj => {
                console.log("Загрузка данных!", obj.data)
                setLoaded(obj.data);
            }).catch(function(error){
                console.log("Error!!!");
                console.log(error);
            })
    }, [])

    return (
        <main>
            <header>
                <h1>Library - Favorite</h1>
            </header>
            <section>
                <ul className="ListBook">
                    {arrMyBooks(loaded)}
                </ul>
            </section>
            <Navigation />
        </main>
    );
  }
  
  export default Favorite;