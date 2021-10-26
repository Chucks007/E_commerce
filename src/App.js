import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, NavBar } from "./components";

const App = () => {
  const [products, setProduct] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div>
      <NavBar />
      <Products products={products} />
    </div>
  );
};

export default App;
