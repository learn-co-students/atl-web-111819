import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import Form from './Components/Form.js'

// import books from './books'

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: [],
      addingBook: false
    }
    console.log(this.__proto__.constructor.name, "constructor")
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      this.setState({ books: books, addingBook: false })
    })
  }

  handleClick = (e) => {
    this.setState({ addingBook: false })
  }

  handleUpdateBooks = (book) => {
    this.setState({ books: [...this.state.books,book], addingBook: false })
  }

  handleAddaBook = (e) => {
    this.setState({ addingBook: !this.state.addingBook })
  }

  handlesRendering = () => {
    if(this.state.addingBook !== true){
      return (
        <div>
          {
            this.state.books.length > 0
              ? null
                : <button onClick={this.handleClick}>Get Books</button>
          }
          <button onClick={this.handleAddaBook}>Add New Books</button>
          <BookContainer books={this.state.books} />
        </div>
      )
    }else{
      return (
        <div>
          <button onClick={this.handleClick}>Get Books</button>
          <Form handleUpdateBooks={this.handleUpdateBooks} />
        </div>
      )
    }
  }

  render(){
    return (
      <div className="parent">
        <Header />
        { this.handlesRendering() }
      </div>
    );
  }
}

export default App;
