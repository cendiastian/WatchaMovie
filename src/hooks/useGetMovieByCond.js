import { useQuery } from "@apollo/client";
import { GetMovieByCond } from "../graphql/query";

function useGetMovieByCond(title,genre,order) {
  let obj;
  if (genre !== null && title !== null && genre !== "" && title !== "") {
    obj = { "Genre": { "_eq": parseInt(genre) },"Title": { "_ilike": "%"+title+"%" } };
  } else if (title !== null && title !== "") {
    obj = { "Title": { "_ilike": "%"+title+"%" } };
  } else if (genre !== null && genre !== ""){
    obj = { "Genre": { "_eq": parseInt(genre) }}
  } else {
    obj = {}
  }
  let order_obj = {"id": order}
  console.log(obj, order_obj)
  const {
    data: MovieByCond,
    error: errorMovieByCond,
    loading: loadingMovieByCond,
  } = useQuery(GetMovieByCond, {
    variables: {
      where: obj,
      order:order_obj
    },
  });
  return { MovieByCond, errorMovieByCond, loadingMovieByCond };
}
export default useGetMovieByCond;