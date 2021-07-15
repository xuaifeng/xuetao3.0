import { LOADDATA } from './actionTypes'

const defaultState = {
  list: [],
  data: {}
}

const reducer = (state = defaultState, action)=>{
   switch (action.type) {
     case LOADDATA:
      return {
        data: action.data,
        list: action.data.children,
      }
     default:
      return state
   }
}

export default reducer;