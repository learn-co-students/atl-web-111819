import React from 'react';
import BookCard from './BookCard'

class BookContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      books: [],
      addingBook: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/books',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(books => {
      this.setState({ books: books, addingBook: false })
    })
  }

  render(){
    return (
      <div className='maincontainer'>
        {
          this.state.books.map(book => <BookCard book={book} key={book.title} />)
        }
      </div>
    )
  }
}

export default BookContainer;
