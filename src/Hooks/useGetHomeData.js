import { useEffect, useState } from "react";

const useGetHomeData = (id) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://tranquil-hamlet-69916.herokuapp.com/product/home`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useGetHomeData;
