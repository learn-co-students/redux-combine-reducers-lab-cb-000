import React, { Component } from 'react'
import BookInput from '../components/BookInput'
import { connect } from 'react-redux';
import Books from '../components/Books'
import RecommendedBooks from '../components/RecommendedBooks'




class BookContainer extends Component {

  render(){
    return(
      <div>
        <BookInput addBook={this.props.addBook} />
        <Books books={this.props.books} addRecommendedBook={this.props.addRecommendedBook} deleteBook={this.props.deleteBook}/>
        <RecommendedBooks books={this.props.recommendedBooks} deleteRecommendedBook={this.props.deleteRecommendedBook} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch({  type: "ADD_BOOK", payload: book }),
  deleteBook: book => dispatch({  type: "DELETE_BOOK", payload: book }),

  addRecommendedBook: book => dispatch({  type: "ADD_RECOMMENDED_BOOK", payload: book }),
  deleteRecommendedBook: book => dispatch({  type: "DELETE_RECOMMENDED_BOOK", payload: book })

})

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
