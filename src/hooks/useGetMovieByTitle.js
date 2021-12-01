import { useQuery } from "@apollo/client";
import { GetMovieByTitle } from "../graphql/query";

function useGetMovieByTitle(id) {
  const {
    data: MovieByTitle,
    error: errorMovieByTitle,
    loading: loadingMovieByTitle,
  } = useQuery(GetMovieByTitle, {
    variables: {
      _like: id,
    },
  });
  return { MovieByTitle, errorMovieByTitle, loadingMovieByTitle };
}
export default useGetMovieByTitle;