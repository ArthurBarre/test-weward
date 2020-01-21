const descReducer = (state = 'Description de la campagne', action) => {
  switch(action.type){
    case "SET_DESC":
      state =  action.payload
      return state;
    default:
      return state
  }
}

export default descReducer;