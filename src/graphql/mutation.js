import { gql } from "@apollo/client";

export const createMovie = gql`
  mutation createMovie($object: moviedb_movie_insert_input!) {
    insert_moviedb_movie_one(objects: $object) {
      id
    }
  }
`;
export const createGenre = gql`
  mutation createGenre($object: moviedb_genre_insert_input!) {
    insert_moviedb_genre_one(objects: $object){
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
