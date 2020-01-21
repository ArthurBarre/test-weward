const remReducer = (state = 500, action) => {
  switch(action.type){
    case "SET_REM":
      state =  action.payload
      return state;
    default:
      return state
  }
}

export default remReducer;