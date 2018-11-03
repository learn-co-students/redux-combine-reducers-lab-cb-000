import React , {Component} from 'react'


class Book extends Component {
  handleRecommend = () => {
    this.props.addRecommendedBook(this.props.book)
  }
  handleDelete = () => {
    this.props.deleteBook(this.props.book)
  }
  render(){
    return(
      <li>
        {this.props.book.title} by: {this.props.book.author}
        <button onClick={this.handleRecommend}>Recommend</button>
        <button onClick={this.handleDelete}>Delete Book</button>
      </li>
    )
  }

}

export default Book
