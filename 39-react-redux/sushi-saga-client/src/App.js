import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    wallet: 100,
    offset: 0
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({ sushis }))
  }

  handleEatSushi = (sushi) => {
    if(!this.state.eaten.includes(sushi) && sushi.price <= this.state.wallet) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        wallet: this.state.wallet - sushi.price
      })
    }
  }

  handleMoreSushi = () => {
    if (this.state.offset + 4 >= this.state.sushis.length - 1) {
      this.setState({ offset: 0 })
    }else{
      this.setState({ offset: this.state.offset + 4})
    }
  }

  render() {
    return (
      <div className="app">

        <SushiContainer
          sushis={this.state.sushis.slice(this.state.offset,this.state.offset+4)}
            eaten={this.state.eaten}
              handleEatSushi={this.handleEatSushi}
                handleMoreSushi={this.handleMoreSushi} />

        <Table wallet={this.state.wallet} eaten={this.state.eaten} />

      </div>
    );
  }
}

export default App;
