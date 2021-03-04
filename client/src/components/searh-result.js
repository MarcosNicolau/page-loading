import { useState, useEffect } from 'react';
import useQuery from '../utils/use-query';
import ProductsList from './products-list';
import Pages from './pages-enumerator';
import axios from 'axios';
import '../styles/products-list.scss';

const SearchResult = () => {
  const search = useQuery().get('search');
  const length = useQuery().get('length');
  const [products, setProducts] = useState('loading');
  const [productsPages, setProductPages] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(`/products?search=${search}&length=${length}`);
      setProducts(res.data.products);
      setProductPages(res.data.pages);
    } catch (err) {
      const res = err.response;
      if (res.status === 404) return setProducts(res.data);
    }
  };
  // eslint-disable-next-line
  useEffect(() => getProducts(), []);

  if (products === 'loading') return <h1>Loading...</h1>;
  if (!products) return <h1 className="negative-search">No products were found</h1>;

  return (
    <>
      <h2 className="query">{search}</h2>
      <ProductsList products={products} />
      <Pages pages={productsPages} length={length} search={search} />
    </>
  );
};

export default SearchResult;
