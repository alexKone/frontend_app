import ApiService from "apps/front/src/utils/apiService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    ApiService.getProductById(id)
      .then(data => console.log(data))
  }, [id])

  return (
    <h3>product details </h3>
  )
}

export default ProductDetails;
