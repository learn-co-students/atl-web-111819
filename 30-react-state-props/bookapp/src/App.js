import React from 'react';
import './App.css';

import Header from './Header'
import CardContainer from './CardContainer'

import books from './data'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      data: books
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <CardContainer data={this.state.data} />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <CardContainer data={data} />
//     </div>
//   );
// }

export default App;
