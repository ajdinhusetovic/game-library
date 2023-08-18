import React from 'react'
import { useState } from 'react';
import '../../scss/accordion.scss'

export const Accordion = ({ game }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className='card'>
                <div className='card-title-wrapper' onClick={toggleAccordion}>
                    <h2 className='card-title'>{game.external}</h2>
                    <span>{isExpanded ? '-' : '+'}</span>
                </div>
                <div className={`card-content ${isExpanded ? 'expanded' : ''}`}>
                    {isExpanded && <p>{game.cheapest}</p>}
                </div>
            </div>
        </>
    )
}

