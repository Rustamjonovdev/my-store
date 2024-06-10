import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  console.log(id);

  const { data, setData, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );
  console.log(data);
  return <>
  {data && <div className="site-container flex-column gap-2">
    <h1 className="text-center text-3xl m-2">{data.title}</h1>
    <img src={data.thumbnail} alt={data.description} />
    <p><b className="text-2xl">Description:</b> {data.description}</p>
    <p><b className="text-2xl">Price: </b>${data.price}</p>
    <p><b>Rating: </b> {data.rating}</p>
    <p><b>Category: </b> {data.category}</p>
    </div>}
  </>;
}

export default Product;
