const initialState = {
  sushis: [],
  eaten: [],
  offset: 0,
  wallet: 100
}

export default (state=initialState,action) => {

  switch (action.type) {

    case 'GET_SUSHI':
      return {
        ...state,
        sushis: action.sushis
      }

    case 'MORE_SUSHI':
      if (state.offset + 4 >= state.sushis.length - 1) {
        return {
          ...state, offset: 0
        }
      }else{
        return {
          ...state, offset: state.offset + 4
        }
      }

    case 'EAT_SUSHI':
      if(!state.eaten.includes(action.sushi) && action.sushi.price <= state.wallet) {
        return {
          ...state,
          eaten: [...state.eaten, action.sushi],
          wallet: state.wallet - action.sushi.price
        }
      }
      return state

    default:
      return state
  }

}
