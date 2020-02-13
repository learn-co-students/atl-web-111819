const initialState = {
  wallet: 100
}

export default (state=initialState,action) => {
  console.log(action)
  return state
}
