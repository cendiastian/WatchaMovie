import { InsertNewUser } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

export function useInsertNewUser() {
  const [insertUser, { data: newUser,error: errorInsertUser, loading: loadingInsertUser }] =
    useMutation(InsertNewUser);
  return { insertUser,newUser, errorInsertUser, loadingInsertUser };
}