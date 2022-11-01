import ProductCard from "apps/front/src/components/Products/ProductCard";
import constants from "apps/front/src/constants";
import { IProducts } from "apps/front/src/types";
import ApiService from "apps/front/src/utils/apiService";
import { useEffect, useState } from 'react';
import useFetch from '../../../../../../libs/front/ui-shared/src/hooks/use-fetch/useFetch';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getProducts()
      .then(data => setProducts(data.datas))
  }, []);

  return (
    <div>
      <section>
        {products && products.map((d: any, i: number) => <ProductCard key={i} item={d} />)}
      </section>
    </div>
  )
}

export default Products;
