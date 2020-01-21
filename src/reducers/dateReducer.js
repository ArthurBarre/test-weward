const dateReducer = (state = '02/01/2019', action) => {
  switch(action.type){
    case "SET_DATE":
      state =  action.payload
      return state;
    default:
      return state
  }
}

export default dateReducer;