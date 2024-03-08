// components/ProductList.js
"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const ProductList = () => {
  const products = useSelector(state => state.products.products);

  return (
    <ProductListWrapper>
    {products && products.map(product => (
  <ProductCard key={product.id}>
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
  </ProductCard>
))}
    </ProductListWrapper>
  );
}

export default ProductList;
