import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import SortFilterBar from './SortFilterBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: [],
      flippedHogs: [],
      sort: 'None',
      filter: false
    }
  }

  componentDidMount() {
    this.setState({ hogs: hogs })
  }

  flipThatHog =(thatHog)=> {
    let flippedHogs = [...this.state.flippedHogs]
    if (flippedHogs.includes(thatHog.name))
      flippedHogs = flippedHogs.filter( hogName => hogName !== thatHog.name)
    else
      flippedHogs.push(thatHog.name)
    this.setState({ flippedHogs: flippedHogs })
  }

  changeSort =(value)=> this.setState({ sort: value }, ()=> console.log(this.state.sort))
  changeFilter =()=> this.setState({ filter: !this.state.filter }, ()=> console.log(this.state.filter))

  filterHogs =()=> {
    let filteredHogs = [...this.state.hogs]
    if (this.state.filter)
      filteredHogs = filteredHogs.filter( hog => hog.greased )
    return filteredHogs
  }

  sortHogs =()=> {
    let sortedHogs = this.filterHogs()
    let sort = this.state.sort

    if (sort === 'Name')
      sortedHogs.sort( (hog1, hog2) => {
        if (hog1.name < hog2.name)
          return -1
        else if (hog1.name > hog2.name)
          return 1
        else
          return 0
      })
    else if (sort === 'Weight')
      sortedHogs.sort( (hog1, hog2) => hog1.weight - hog2.weight )

    return sortedHogs
  }


  render() {
    return (
      <div className="App">
        < Nav />
        <br/>
        <SortFilterBar
          sort={this.state.sort}
          filter={this.state.filter}
          changeSort={this.changeSort}
          changeFilter={this.changeFilter}
        />
        <br/>
        <HogContainer
          hogs={this.sortHogs()}
          flippedHogs={this.state.flippedHogs}
          flipThatHog={this.flipThatHog}
          />
      </div>
    )
  }
}

export default App;
