import React from 'react';
import  { Link } from 'react-router-dom';
export const Home = (props) => (
    <div className="jumbotron">
        <h1>
            Welcome
        </h1>
        <p>
            This is my first React Project
        </p>
        <Link to = "about" className="btn btn-primary"> About</Link>
        
    </div>
)