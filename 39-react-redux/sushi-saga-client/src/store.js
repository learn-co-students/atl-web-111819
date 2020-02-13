import { createStore, combineReducers } from 'redux';

import sushiReducer from './reducers/sushiReducer'
import tableReducer from './reducers/tableReducer'

const rootReducer = combineReducers({
  sushi: sushiReducer,
  table: tableReducer
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
