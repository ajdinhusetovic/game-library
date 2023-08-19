import React, { useEffect } from 'react'
import { useState } from 'react';
import '../../scss/accordion.scss'
import axios from 'axios';
import stores from '../../data/storeData.json'

export const Accordion = ({ game }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [deals, setDeals] = useState([]);


    const handleClick = async () => {
        setIsExpanded(!isExpanded);

        try {
            const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${game.gameID}`)
            const data = response.data
            setDeals(data.deals)
        } catch (error) {
            console.error("Error fetching game deals" + error)
        }
    }

    return (
        <>
            <div className='card'>
                <div className='img-wrapper'><img src={game.thumb} width={100} /></div>
                <div className='card-title-wrapper' onClick={handleClick}>
                    <h2 className='card-title'>{game.external}</h2>
                    <span>{isExpanded ? '-' : '+'}</span>
                </div>
                <div className={`card-content ${isExpanded ? 'expanded' : ''}`}>
                    {isExpanded && deals.length > 0 && (
                        <ul>
                            {deals.map((deal) => (
                                <li key={deal.dealID}>
                                    <img src={stores[deal.storeID].images.logo} alt="" />
                                </li>
                            ))}
                        </ul>
                    )
                    }
                </div>
            </div>
        </>
    )
}

