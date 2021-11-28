import { useLazyQuery } from "@apollo/client";
import { GetMovieById } from "../graphql/query";

export function useGetMovie(movie) {
  const [
    getMovieById,
    {
      data: questionsByTag,
      error: errorQuestionsByTag,
      loading: loadingQuestionsByTag,
    },
  ] = useLazyQuery(GetMovieById);
  return {  
    getMovieById,
    questionsByTag,
    errorQuestionsByTag,
    loadingQuestionsByTag,
  };
}