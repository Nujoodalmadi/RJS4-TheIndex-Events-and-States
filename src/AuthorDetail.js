import React, { Component } from "react";
import BooksTable from "./BooksTable";

class AuthorDetail extends Component {
  render() {
    const oneBook = this.props.author.books.map(book => (
      <BooksTable key={book.title} book={book} author={this.props.author} />
    ));

    return (
      <div className="author col-xs-10">
        <div>
          <h3>{this.props.author.first_name}</h3>
          <img
            src={this.props.author.imageUrl}
            className="img-thumbnail"
            alt=""
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{oneBook}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
