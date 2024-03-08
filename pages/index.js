// pages/index.js
"use client"
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import ProductList from '@/components/ProductList';
import ProductDetail from '@/components/ProductDetail';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <p>Welcome to the home page</p>
      <Slider />
      <ProductList />
      <ProductDetail/>
    </div>
  );
}

export default Home;
