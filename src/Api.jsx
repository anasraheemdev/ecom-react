import React, { useState, useEffect } from "react";
import Product from "./Product";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Testmonial from "./Testmonial";

const Api = () => {
  const [products, setProducts] = useState([]);

  const fetchdata = async () => {
    const api = "https://dummyjson.com/products";

    const response = await fetch(api);
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Header />
      <Home/>
      <Testmonial/>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {
                products?.map((item,index)=>{
                    return <Product key={item.id} {...item}/>
                })
            }
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Api;
