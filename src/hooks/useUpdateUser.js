import { UpdateUser } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

export function useUpdateUser() {
  const [updateUser, { loading: loadingUpdate }] = useMutation(
    UpdateUser,
  );
  return { updateUser, loadingUpdate };
}
