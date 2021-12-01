import { useQuery } from "@apollo/client";
import { GetAllGenre } from "../graphql/query";

export function useGetAllGenre(genre) {
  const {
    data: allGenre,
    error: errorAllGenre,
    loading: loadingAllGenre,
  } = useQuery(GetAllGenre);
  return { allGenre, errorAllGenre, loadingAllGenre };
}
