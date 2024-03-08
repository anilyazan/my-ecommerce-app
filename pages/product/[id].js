import { useRouter } from 'next/router';
import Header from '../components/Header';
import styled from 'styled-components';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>Product {id} Detail Page</h1>
      <p>Welcome to product {id}</p>
    </div>
  );
}

export default ProductDetailPage;
