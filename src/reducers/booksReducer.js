let id = 0;

const booksReducer = (state = [], action) => {
  switch (action.type) {
  case "ADD_BOOK":
    const book = {
      title: action.payload.title,
      author: action.payload.author,
      id: ++id
    }
    return [].concat(state, book)
  case "DELETE_BOOK":
    let idx = state.indexOf(action.payload)
    return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
  default:
    return state
  }
}

export default booksReducer
