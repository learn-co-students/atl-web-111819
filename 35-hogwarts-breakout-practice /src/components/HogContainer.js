import React from 'react'
import HogCard from './HogCard'

const HogContainer =(props)=> {
    let hogs = props.hogs
    console.log(hogs)

    return <div className='ui grid container'>
        {
            hogs.map( hog => <HogCard
                hog={hog}
                flipThatHog={props.flipThatHog}
                flippedHogs={props.flippedHogs}
                /> )
        }
    </div>
}

export default HogContainer