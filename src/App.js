import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    filteredAuthors: authors
  };

  selectAuthor = author => this.setState({ currentAuthor: author }); //method that takes an object parameter (author)
  unselectAuthor = () => this.setState({ currentAuthor: null });
  filterAuthors = query => {
    this.setState({
      filteredAuthors: authors.filter(author =>
        `${author.first_name} ${author.last_name}`
          .toLocaleLowerCase()
          .includes(query)
      )
    });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">
            {this.state.currentAuthor ? (
              <AuthorDetail author={this.state.currentAuthor} />
            ) : (
              <AuthorsList
                authors={this.state.filteredAuthors}
                passingAuthor={this.selectAuthor}
                filterAuthors={this.filterAuthors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
