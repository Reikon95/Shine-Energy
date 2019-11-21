import React from 'react';
import shine from '../energy.svg';
import './Logo.css';

export default function Logo() {



    return (
        <>
            <div className="container" id='logoHeader'>
                <img className="itemLogo" id="logo" src={shine} />
                <div className="itemLogo"><h1 id="logoName">Shine Energy</h1></div>
            </div>


        </>
    )
}