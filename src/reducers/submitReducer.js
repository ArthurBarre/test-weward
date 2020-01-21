const submitReducer = (state = false, action) => {
  switch(action.type){
    case "SUBMIT":
      state = true
      return state;
    case "CLOSE":
      state = false
      return state;
    default:
      return state
  }
}

export default submitReducer;