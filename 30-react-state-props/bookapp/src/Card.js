import React from 'react';

// class Card extends React.Component {
//
//   render(){
//     return(
//       <div className="card">
//         <img src={this.props.book.img} alt="" />
//         <h3>Book Name: {this.props.book.title} </h3>
//         <h3>Author: {this.props.book.author} </h3>
//       </div>
//     )
//   }
//
// }

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.book.img} alt="" />
      <h3>Book Name: {props.book.title} </h3>
      <h3>Author: {props.book.author} </h3>
    </div>
  )
}

export default Card;
