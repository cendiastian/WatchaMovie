import { useQuery } from "@apollo/client";
import { GetMovieByLimit } from "../graphql/query";

function useGetMovieByLimit() {
  const {
    data: MovieByLimit,
    error: errorMovieByLimit,
    loading: loadingMovieByLimit,
  } = useQuery(GetMovieByLimit);
  return { MovieByLimit, errorMovieByLimit, loadingMovieByLimit };
}
export default useGetMovieByLimit;