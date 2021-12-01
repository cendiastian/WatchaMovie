import { useQuery } from "@apollo/client";
import { GetMovieByGenre } from "../graphql/query";

function useGetMovieByGenre(id) {
  const {
    data: MovieByGenre,
    error: errorMovieByGenre,
    loading: loadingMovieByGenre,
  } = useQuery(GetMovieByGenre, {
    variables: {
      _eq: id,
    },
  });
  return { MovieByGenre, errorMovieByGenre, loadingMovieByGenre };
}
export default useGetMovieByGenre;