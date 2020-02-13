import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(props.offset,props.offset+4).map(sushi => <Sushi key={sushi.id} sushi={sushi} />)
        }
        <MoreButton />

      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.sushi
  }
}

export default connect(mapStateToProps)(SushiContainer)
