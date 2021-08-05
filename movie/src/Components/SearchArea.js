import React, { Component } from 'react'

export class SearchArea extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <form class="d-flex" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            /> 
            <button class="btn btn-secondary my-2 my-sm-0" type="submit" onclick="" >Search</button>
          </form>
        </div>
      </div>
        )
    }
}

export default SearchArea
