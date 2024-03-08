import { useRouter } from 'next/router';
import Header from '@/components/Header';
import styled from 'styled-components';


const CategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>Category {id} Page</h1>
      <p>Welcome to category {id}</p>
    </div>
  );
}

export default CategoryPage;
