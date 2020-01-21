const titleReducer = (state = 'Titre de la campagne', action) => {
  switch(action.type){
    case "SET_TITLE":
      state =  action.payload
      return state;
    default:
      return state
  }
}

export default titleReducer;