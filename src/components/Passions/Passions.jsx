import React from 'react'
import { passions } from '../../constants' 

import './Passions.css'

export default function Passions() {
    return (
        <div className="passions-container">
            <h1 id="passions-title">What should you know about me?</h1>
            {passions.map(passion => (
                <div className="description">
                    <h3 className="passion-type">{passion.name}</h3>
                    <p>
                        {passion.description}
                    </p> 
                </div>
            ))}
            <div id="passions-margin"/>
        </div>
    )
}
