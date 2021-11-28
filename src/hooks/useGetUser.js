import { useLazyQuery } from "@apollo/client";
import { GetUserById } from "../graphql/query";

export function useGetUser(movie) {
  const [
    getUserById,
    {
      data: userById,
      error: errorUserById,
      loading: loadingUserById,
    },
  ] = useLazyQuery(GetUserById);
  return {  
    getUserById,
    userById,
    errorUserById,
    loadingUserById,
  };
}