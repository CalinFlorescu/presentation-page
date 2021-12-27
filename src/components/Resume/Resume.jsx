import React from 'react'

import './Resume.css'
import { experiences } from '../../constants'

export default function Resume() {
    return (
        <div className="resume-container">
            <h1 id="resume-title">What is my experience?</h1>
            {experiences.map(experience => (
                <div key={experience.name} className="resume-item">
                    <div className="resume-item-content">
                        <a target="#" href={experience.link}>
                            <h2>{experience.name}</h2>
                        </a>
                        <h3>{experience.function}, {experience.duration}</h3>
                        <h4>{experience.location}</h4>
                        During my time with the company, I've: 
                        <ul>
                            {experience.responsabilities.map(responsability => (
                                <li key={responsability}>{responsability}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
