import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'

// import books from './books'

class App extends Component {

  state = {
    books: [],
    addingBook: false,
    title: '',
    img: '',
    author: ''
  }

  handleClick = (e) => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      this.setState({ books: books, addingBook: false })
    })
  }

  handleAddaBook = (e) => {
    this.setState({ addingBook: !this.state.addingBook })
  }

  handleInputChange = (e) => {

    if(e.target.name === 'title'){
      this.setState({ title: e.target.value })
    }else if(e.target.name === 'img'){
      this.setState({ img: e.target.value })
    }else if(e.target.name === 'author'){
      this.setState({ author: e.target.value })
    }
  }

  handleCreateBook = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/books',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        img: this.state.img,
        author: this.state.author,
        read: false
      })
    })
    .then(res => res.json())
    .then(book => {
        this.setState({ books: [...this.state.books,book], title: '', author: '', img: '' })
    })
  }

  handlesRendering = () => {
    if(this.state.addingBook !== true){
      return (
        <div>
          <button onClick={this.handleClick}>Get Books</button>
          <button onClick={this.handleAddaBook}>Add New Books</button>
          <BookContainer books={this.state.books} />
        </div>
      )
    }else{
      return (
        <div>
          <button onClick={this.handleClick}>Get Books</button>
          <span className={'form-outer'}>
            <h2> Add a new book </h2>
            <form className={'add-book'} onSubmit={this.handleCreateBook}>
              <input type="text" name='title' onChange={this.handleInputChange} value={this.state.title} placeholder="title"  />
              <input type="text" name='img' onChange={this.handleInputChange} value={this.state.img} placeholder="img"  />
              <input type="text" name='author' onChange={this.handleInputChange} value={this.state.author} placeholder="author"  />
              <input id="submit" type="submit" value="Submit" />
            </form>
          </span>
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
