import { createMovie } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { GetAllMovie } from "../graphql/query";

export function useCreateMovie() {
  const [CreateMovie, { error: errorCreate, loading: loadingCreate }] = useMutation(createMovie, {
    refetchQueries: [GetAllMovie],
  });
  return { CreateMovie, errorCreate, loadingCreate };
}
