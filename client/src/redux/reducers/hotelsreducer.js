const initialState = 0;

const hotelsreducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOTELS_BY_CITY" : 
      return (
        action.payload
      )
    default: return state;
  }
}

export default hotelsreducer