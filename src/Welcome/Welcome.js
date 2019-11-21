import React from 'react';
import './Welcome.css';

export default function Welcome({ userName }) {

    return (
        <>
            <h2 id="welcome">Welcome {userName}!</h2>
        </>
    )
}