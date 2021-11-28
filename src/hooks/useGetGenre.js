import { useLazyQuery } from "@apollo/client";
import { GetGenreById } from "../graphql/query";

export function UseGetGenre(movie) {
  const [
    getGenreById,
    {
      data: questionsByTag,
      error: errorQuestionsByTag,
      loading: loadingQuestionsByTag,
    },
  ] = useLazyQuery(GetGenreById);
  return {  
    getGenreById,
    questionsByTag,
    errorQuestionsByTag,
    loadingQuestionsByTag,
  };
}