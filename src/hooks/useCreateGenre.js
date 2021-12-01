import { createGenre } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { GetAllGenre } from "../graphql/query";

export function useCreateGenre() {
  const [CreateGenre, { loading: loadingCreate }] = useMutation(createGenre, {
    refetchQueries: [GetAllGenre],
  });
  return { CreateGenre, loadingCreate };
}
