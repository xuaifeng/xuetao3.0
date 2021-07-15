import { combineReducers } from 'redux'

import {
  reducer as tianHome // 别名
} from '../home/tianHome/'

/** 多个 reducer 合并成一个新树 */
const reducer = combineReducers({
  tianHome
})

export default reducer


