import { gql } from "@apollo/client";

export const createMovie = gql`
  mutation createMovie($object: moviedb_movie_insert_input!) {
    insert_moviedb_movie_one(object: $object) {
      id
    }
  }
`;
export const createGenre = gql`
  mutation createGenre($name: String!) {
    insert_moviedb_genre_one(object: { name: $name }) {
      id
    }
  }
`;
export const InsertNewUser = gql`
  mutation MyMutation($object: moviedb_user_insert_input!) {
    insert_moviedb_user_one(object: $object) {
      id
    }
  }
`;

export const UpdateUser = gql`
  mutation MyMutation(
    $id: String = ""
    $premium: Boolean = false
    $expired: timestamptz = ""
  ) {
    update_moviedb_user_by_pk(
      pk_columns: { id: $id }
      _set: { premium: $premium, expired: $expired }
    ){
        id
    }
  }
`;

const UpdateMovie = gql`
  mutation UpdateMovie(
    $id: Int!
    $Genre: Int!
    $Plot: String!
    $Poster: String!
    $Released: String!
    $Runtime: String!
    $Title: String!
    $Video: String!
    $Writer: String!
    $imdbID: String!
  ) {
    update_moviedb_movie_by_pk(
      pk_columns: { id: $id }
      _set: {
        Genre: $Genre
        Plot: $Plot
        Poster: $Poster
        Released: $Released
        Runtime: $Runtime
        Title: $Title
        Video: $Video
        Writer: $Writer
        imdbID: $imdbID
      }
    ) {
      id
    }
  }
`;
const DeleteMovie = gql`
  mutation MyMutation($id: Int!) {
    delete_moviedb_movie_by_pk(id: $id) {
      id
    }
  }
`;
export { DeleteMovie, UpdateMovie };
