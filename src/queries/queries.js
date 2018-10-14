import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

// get all of them
const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

// $ is query variable
// String! this is a non-null graphql type ('required')
const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

// get one book
const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
