import React from 'react'
import { connect } from 'react-redux';

const Sushi = (props) => {

  const sushi = props.sushi
  const eaten = props.eaten.includes(sushi)

  return (
    <div className="sushi">
      <div className="plate"
           onClick={ () => props.eat_sushi(sushi) }>
        {
          eaten ?
            null
              : <img src={sushi.img_url} width="100%" alt="" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    eat_sushi: (sushi) => dispatch({ type: 'EAT_SUSHI', sushi: sushi })
  }
}

const mapStateToProps = (state) => {
  return {
    eaten: state.sushi.eaten
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sushi)
