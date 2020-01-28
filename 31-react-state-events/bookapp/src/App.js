import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'

import books from './books'

class App extends Component {

  state = {
    books: []
  }

  handleClick = (e) => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      this.setState({ books: books })
    })
  }

  render(){
    return (
      <div className="parent">

        <Header />

        <button onClick={this.handleClick}>Get Books</button>

        <BookContainer books={this.state.books} />

      </div>
    );
  }
}

export default App;
