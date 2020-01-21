export const setLocation = ( obj ) => {
  return {
    type: 'SET_LOCATION',
    payload: obj
  }
}

export const setTitle = ( str ) => {
  return {
    type: 'SET_TITLE',
    payload: str
  }
}

export const setDesc = ( str ) => {
  return {
    type: 'SET_DESC',
    payload: str
  }
}

export const setDate = ( str ) => {
  return {
    type: 'SET_DATE',
    payload: str
  }
}

export const setRem = ( nbr ) => {
  return {
    type: 'SET_REM',
    payload: nbr
  }
}

export const setAdress = ( nbr ) => {
  return {
    type: 'SET_ADDRESS',
    payload: nbr
  }
}