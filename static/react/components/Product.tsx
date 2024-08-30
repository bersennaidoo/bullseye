import React from "react";

export interface Products {
  name?: string;
  price?: string;
}

interface IProductProps {
  product?: Products;
}

const Product = (props: IProductProps) => {
  const { product } = props;

  return (
    <>
    {product ? product.name : ""}
    </>
  )
};

export default Product;
