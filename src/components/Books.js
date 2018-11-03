import React from 'react'
import Book from './Book'

const Books = props => {
  let books;
  if (props.books !== undefined) {
    books = props.books.map((book, i) => <Book key={i} book={book} addRecommendedBook={props.addRecommendedBook} deleteBook={props.deleteBook} /> )
  }

  return(
    <ul>
      {books}
    </ul>
  )
}

export default Books
