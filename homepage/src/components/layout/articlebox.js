import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

function articlebox() {
   return (
       <div id="component">
            <div id="text">
                <h3>FDA Approves Ketamine-like
                    nasal spray for depression
                </h3>
                <p>
                    Well some random shit
                </p> 
                <text>Debra Goldschmidt</text><text>March 5, 2019</text>
            </div>
        <img src="https://www.naturalblaze.com/wp-content/uploads/2019/03/ketamine-spray.jpg" />
       </div>
   )
}


export default articlebox;