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
    moviedb_movie(where: { id: $id }) {
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
      created_at
      updated_at
    }
  }
`;

export const GetGenreById = gql`
  query GetGenreById($id: Int!) {
    moviedb_genre(where: { id: $id }) {
      id
      name
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