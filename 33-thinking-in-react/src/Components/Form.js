import React from 'react';

class Form extends React.Component {

  initialState = {
    title: '',
    img: '',
    author: ''
  }

  state = { ...this.initialState }

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
        this.setState(this.initialState)
        this.props.handleUpdateBooks(book)
    })
  }

  render(){
    return (
      <span className={'form-outer'}>
        <h2> Add a new book </h2>
        <form className={'add-book'} onSubmit={this.handleCreateBook}>
          <input type="text" name='title' onChange={this.handleInputChange} value={this.state.title} placeholder="title"  />
          <input type="text" name='img' onChange={this.handleInputChange} value={this.state.img} placeholder="img"  />
          <input type="text" name='author' onChange={this.handleInputChange} value={this.state.author} placeholder="author"  />
          <input id="submit" type="submit" value="Submit" />
        </form>
      </span>
    )
  }
}

export default Form;
