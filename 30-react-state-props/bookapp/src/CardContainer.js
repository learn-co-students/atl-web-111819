import React from 'react'
import Card from './Card'

const CardContainer = (props) => {
  return(
    <div>
      { props.data.map(book => <Card book={book} /> ) }
    </div>
  )
}

export default CardContainer;
