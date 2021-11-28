import { CreateMovie } from "../Graphql/mutation";
import { useMutation } from "@apollo/client";
import { GetMovies } from "../Graphql/query";

function useCreateMovie() {
  const [CreateMovies, { loading: loadingCreate }] = useMutation(
    CreateMovie,
    { refetchQueries: [GetMovies] }
  );
  return { CreateMovies, loadingCreate };
}

export default useCreateMovie;
