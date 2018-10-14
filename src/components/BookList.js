import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
    // control output of book data to the page
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayBooks(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => {
                return(
                    <li key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }>{ book.name }</li>
                );
            })
        }
    }
    render(){
      // log this component's props
        // console.log(this.props);
        return(
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
                <BookDetails bookId={ this.state.selected } />
            </div>
        );
    }
}

// Bind this query to this component
export default graphql(getBooksQuery)(BookList);
