import { LOADDATA } from './actionTypes'

import { GET } from '@/utils/http'

const loadDataSync = data => {
  // console.log("同步=>list=>", data);
  return {
    type: LOADDATA,
    data
  }
}

const loadDataAsync = ()=> {
  return async (dispatch) => {
    let result = await GET({
      url: '/api/ucenter/system/queryCity?code=01010101'
    })
    dispatch(loadDataSync(result.data.data))    
  }
}

export {
  loadDataSync,
  loadDataAsync
}