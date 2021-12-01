import { useQuery } from "@apollo/client";
import { GetAllMovie } from "../graphql/query";

export function useGetAllMovie(movie) {
  const {
    data: allMovie,
    error: errorAllMovie,
    loading: loadingAllMovie,
  } = useQuery(GetAllMovie);
  return { allMovie, errorAllMovie, loadingAllMovie };
}
