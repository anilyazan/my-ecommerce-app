// components/Header.js
"use client"
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-right: 1rem;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const CartIcon = styled.div`
  font-size: 1.2rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Your Logo</Logo>
      <Nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/category/1">Category 1</a></li>
          <li><a href="/category/2">Category 2</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </Nav>
      <CartIcon>Cart Icon</CartIcon>
    </HeaderWrapper>
  );
}

export default Header;
