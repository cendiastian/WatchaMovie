import { useQuery } from "@apollo/client";
import { GetMovieById } from "../graphql/query";

function useGetMovie(id) {
  const {
    data: MovieById,
    error: errorMovieById,
    loading: loadingMovieById,
  } = useQuery(GetMovieById, {
    variables: {
      id: id,
    },
  });
  return {
    MovieById,
    errorMovieById,
    loadingMovieById,
  };
}

export default useGetMovie;
