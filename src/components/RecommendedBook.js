import React , {Component} from 'react'


class RecommendedBook extends Component {

  handleDelete = () => {
    this.props.deleteRecommendedBook(this.props.book)
  }
  render(){
    return(
      <li>
        {this.props.book.title} by: {this.props.book.author}
        <button onClick={this.handleDelete}>Delete Book</button>
      </li>
    )
  }

}

export default RecommendedBook
