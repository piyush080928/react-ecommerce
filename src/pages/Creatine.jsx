import React from "react";
import products from '../Data/data'
import PageProductCard from '../Product/PageProductCard'

function Creatine() {
  const creatineProducts = products.filter((item) => item.category.toLowerCase() === "Creatine");

  return(
    <div className="bg-red-100 ">
        <h1 className="text-black bg-red-100 text-center underline text-3xl font-bold">Creatine Products</h1>
        <div className="w-full">
            {creatineProducts.map((product) => (
                <PageProductCard key={product} product={product}></PageProductCard>
            ))}
        </div>
    </div>
  )
}

export default Creatine;