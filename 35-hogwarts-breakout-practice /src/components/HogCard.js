import React from 'react'

const HogCard =(props)=> {
    let hog = props.hog
    let imgName = hog.name.toLowerCase().split(' ').join('_')

    return <div className='ui five wide column pigTile' onClick={()=> props.flipThatHog(hog)} >
        {
            !props.flippedHogs.includes(hog.name) ?
                <div className='image'>
                    <img src={`../hog-imgs/${imgName}.jpg`} />
                    <div className='content'>{hog.name}</div>
                </div>
            :
                <div>
                    <div>
                        Speciality: {hog.specialty}
                    </div>
                    <div>
                        Weight: {hog.weight}
                    </div>
                    <div>
                        Highest Medal Achieved: {hog['highest medal achieved']}
                    </div>
                    <div>
                        Slick?: { hog.greased ? 'Yup' : 'Nadda' }
                    </div>
                </div>
        }
    </div>
}

export default HogCard