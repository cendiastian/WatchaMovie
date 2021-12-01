import { useQuery } from "@apollo/client";
import { GetMovieByOrderAsc } from "../graphql/query";

export function useGetMovieByOrderAsc() {
  const {
    data: MovieByOrderAsc,
    error: errorMovieByOrderAsc,
    loading: loadingMovieByOrderAsc,
  } = useQuery(GetMovieByOrderAsc);
  return { MovieByOrderAsc, errorMovieByOrderAsc, loadingMovieByOrderAsc };
}
//  default useGetMovieByOrderAsc;