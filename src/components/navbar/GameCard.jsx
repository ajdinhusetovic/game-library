import React from 'react'
import '../../scss/gamecard.scss'

export const GameCard = ({ game }) => {

    return (
        <div className="game-card">
            <div>
                <img src={game.thumb} width={200} />
            </div>
            <div className='title'>
                <a href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} className='game-link'>{game.title}</a>
            </div>
            <div className='price'>
                <span id='normal-price'>${game.normalPrice}</span> - <span id='sale-price'>${game.salePrice}</span>
            </div>
            <div>
                Deal rating: {game.dealRating}
            </div>
            <div>
                Steam review: {game.steamRatingText}
            </div>
        </div>
    )
}
