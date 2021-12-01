import { useQuery } from "@apollo/client";
import { GetMovieByOrderDesc } from "../graphql/query";

export function useGetMovieByOrderDesc() {
  const {
    data: MovieByOrderDesc,
    error: errorMovieByOrderDesc,
    loading: loadingMovieByOrderDesc,
  } = useQuery(GetMovieByOrderDesc);
  return { MovieByOrderDesc, errorMovieByOrderDesc, loadingMovieByOrderDesc };
}
//  default useGetMovieByOrderDesc ;