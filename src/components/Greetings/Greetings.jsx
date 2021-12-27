import React from 'react'
import './Greetings.css'

export default function Greetings() {
    return (
        <div className="greetings-container">
            <div className="greetings-blur">
                <span id="greetings-title-first-row">Hey, I'm </span>
                <span id="greetings-title-second-row">Calin Florescu</span>
            </div>
        </div>
    )
}
