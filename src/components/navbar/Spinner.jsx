import React from 'react'
import controllerImage from '../../assets/controller.png'

export const Spinner = () => {
    const spinTransition = {
        loop: Infinity,
        ease: "linear",
        duration: 1
    }
    return (
        <>
            <img
                src={controllerImage}
                alt="game controller image"
                id='loading-controller-image'
            />
        </>
    )
}
