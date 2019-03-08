import React, { Component } from "react";

class BooksTable extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>
          {this.props.author.first_name} {this.props.author.last_name}
        </td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: this.props.book.color }}
          />
        </td>
      </tr>
    );
  }
}

export default BooksTable;
