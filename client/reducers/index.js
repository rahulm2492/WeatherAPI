export default function(state={id:0,val:false} , action){
    switch (action.type) {
    case 'CLICK_COUNT':
      return Object.assign({},state ,{id:action.count})
    case 'ITEMS_HAS_ERRORED':
     return Object.assign({},state,{error:action.hasErrored})
    case 'ITEMS_IS_LOADING':
     return Object.assign({},state,{loading:action.isLoading})
    case 'ITEMS_FETCH_DATA_SUCCESS':
     return Object.assign({},state,{data:action.data})
    default:
      return state

    }
}

