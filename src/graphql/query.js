import { gql } from "@apollo/client";

// export const GetAllMovie = gql`
//   query GetAllMovie {
//     moviedb_movie {
//       writer
//       title
//       released
//       plot
//       id
//       ImdbId
//       genreByGenre {
//         name
//       }
//     }
//   }
// `;
export const GetAllMovie = gql`
  query GetAllMovie {
    moviedb_movie {
      Poster
      Plot
      Released
      Runtime
      Title
      Writer
      imdbID
      id
      genreByGenre {
        name
      }
      Genre
      Video
      created_at
      updated_at
    }
  }
`;

export const GetAllGenre = gql`
  query GetAllGenre {
    moviedb_genre {
      id
      name
    }
  }
`;

export const GetMovieById = gql`
  query GetMovieById($id: Int!) {
    moviedb_movie_by_pk(id: $id) {
      Genre
      Plot
      Poster
      Released
      Runtime
      Title
      Video
      Writer
      created_at
      id
      imdbID
      updated_at
      genreByGenre {
        name
      }
    }
  }
`;

export const GetGenreById = gql`
  query GetGenreById($id: Int_comparison_exp!) {
    moviedb_genre(where: { id: $id }) {
      id
      name
    }
  }
`;
export const GetMovieByLimit = gql`
  query GetMovieByLimit {
    moviedb_movie(limit: 8) {
      Genre
      Plot
      Released
      Poster
      Runtime
      Title
      Writer
      created_at
      id
      imdbID
      genreByGenre {
        name
      }
    }
  }
`;
export const GetMovieByOrderAsc = gql`
query GetMovieByOrderAsc {
    moviedb_movie(order_by: {id: asc}) {
      updated_at
      imdbID
      id
      genreByGenre {
        name
      }
      created_at
      Writer
      Title
      Runtime
      Released
      Genre
      Plot
      Poster
    }
  }
  `;
  export const GetMovieByOrderDesc = gql`
query GetMovieByOrderDesc {
    moviedb_movie(order_by: {id: desc}) {
      updated_at
      imdbID
      id
      genreByGenre {
        name
      }
      created_at
      Writer
      Title
      Runtime
      Released
      Genre
      Plot
      Poster
    }
  }
  `;

  export const GetMovieByCond = gql`
  query GetMovieByCond($where: moviedb_movie_bool_exp! = {} $order: moviedb_movie_order_by!= {}) {
    moviedb_movie(where: $where,order_by: [$order]) {
      updated_at
      imdbID
      id
      created_at
      Writer
      Title
      Runtime
      Released
      Plot
      Genre
      Poster
    }
  }
  `;

  export const GetMovieByGenre = gql`
  query GetMovieByGenre($_eq: Int!) {
    moviedb_movie(where: {Genre: {_eq: $_eq}}){
        updated_at
        imdbID
        id
        created_at
        Writer
        Title
        Runtime
        Released
        Plot
        Genre
        Poster
    }
  }
  `;

export const GetUserById = gql`
  query GetUser($id: String!) {
    moviedb_user(where: { id: { _eq: $id } }) {
      email
      expired
      id
      name
      password
      premium
      role
      created_at
      updated_at
    }
  }
`;
