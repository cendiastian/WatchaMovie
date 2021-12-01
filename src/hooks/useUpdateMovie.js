import { UpdateMovie } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { GetAllMovie } from "../graphql/query";

export function useUpdateMovie() {
  const [updateMovie, { loading: loadingUpdate }] = useMutation(
    UpdateMovie,
    { refetchQueries: [GetAllMovie] }
  );
  return { updateMovie, loadingUpdate };
}

//  default useUpdateMovie;
