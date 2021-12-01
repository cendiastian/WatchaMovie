import { createMovie } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { GetAllMovie } from "../graphql/query";

export function useCreateMovie() {
  const [CreateMovie, { loading: loadingCreate }] = useMutation(createMovie, {
    refetchQueries: [GetAllMovie],
  });
  return { CreateMovie, loadingCreate };
}
