import React, { useRef } from "react";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useNavigate } from "react-router-dom";

export default function Detail(props) {
  const { id } = useParams();
  const skuRef = useRef();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`products/${id}`);

  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <select id="size" ref={skuRef}>
        <option value="">What sizes</option>
        {product.skus.map((s) => (
          <option key={s.sku} value={s.sku}>
            {s.size}
          </option>
        ))}
      </select>
      <button
        className="btn btn-primary"
        onClick={() => {
          const sku = skuRef.current.value;
          if (!sku) return alert("Select a size.");
          props.addToCart(id, sku);
          navigate("/cart");
        }}
      >
        Add to Cart
      </button>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
