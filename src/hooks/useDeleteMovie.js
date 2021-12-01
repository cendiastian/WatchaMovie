import { useMutation } from "@apollo/client";
import { GetAllMovie } from "../graphql/query";
import { DeleteMovie } from "../graphql/mutation";

export function useDeleteMovie() {
  const [deleteMovie, { loading: loadingDelete }] = useMutation(
    DeleteMovie,
    { refetchQueries: [GetAllMovie] }  
  );
  return { deleteMovie, loadingDelete };
}

// export default useDeleteMovie;
