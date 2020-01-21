const locationReducer = (state = {lat:0,lng:0}, action) => {
  switch(action.type){
    case "SET_LOCATION":
      state =  action.payload
      return state;
    default:
      return state
  }
}

export default locationReducer;