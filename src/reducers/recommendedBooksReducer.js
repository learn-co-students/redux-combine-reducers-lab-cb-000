const recommendedBooksReducer = (state = [], action) => {
  switch (action.type) {
  case "ADD_RECOMMENDED_BOOK":

    return [].concat(state, action.payload)
  case "DELETE_RECOMMENDED_BOOK":
    let idx = state.indexOf(action.payload)
    return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
  default:
    return state
  }
}

export default recommendedBooksReducer
