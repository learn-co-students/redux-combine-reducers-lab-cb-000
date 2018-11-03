import React from 'react'
import RecommendedBook from './RecommendedBook'

const RecommendedBooks = props => {
  let books;
  if (props.books !== undefined) {
    books = props.books.map(book => <RecommendedBook key={book.id} book={book} deleteRecommendedBook={props.deleteRecommendedBook}  /> )
  }

  return(
    <div>
      Recommended Books: <br />
      <ul>
        {books}
      </ul>
    </div>

  )
}

export default RecommendedBooks
