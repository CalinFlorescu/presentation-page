import React from 'react'
import { contacts } from '../../constants' 

import './Contact.css'

export default function Contact() {
    return (
        <div className="contact-container">
            <div id="contact-message">
                <h1 id="contact-title">How can you find me?</h1>
                <h3 id="contact-subtitle">Best way to contact me is on linkedin or directly on email ^.^</h3>
            </div>
            <div id="contact-container-links">
                {contacts.map(contact => (
                    <a href={contact.link}>
                        <img className={`contact-logos ${contact.name === 'gmail' ? 'gmail' : ''}`} src={contact.image} alt={`${contact.name} logo`} />
                    </a>
                ))}
            </div>
        </div>
    )
}
