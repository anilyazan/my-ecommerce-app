// components/ProductDetail.js
"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation'; 
import styled from 'styled-components';

const ProductDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const product = useSelector(state => state.products.find(p => p.id === parseInt(id)));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
