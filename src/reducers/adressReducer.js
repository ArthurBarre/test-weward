const descReducer = (state = 'Adresse du point de vente', action) => {
  switch(action.type){
    case "SET_ADDRESS":
      state =  action.payload
      return state;
    default:
      return state
  }
}

export default descReducer;