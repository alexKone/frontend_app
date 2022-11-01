import { Link } from "react-router-dom";
import { IProductData } from "../../types";

interface IProps {
  item: IProductData
}

const ProductCard = ({ item }: IProps) => {

  console.log(item);


  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <h3>product {item.name}</h3>
        <p>{item.description}</p>
      </Link>
    </div>
  )
}

export default ProductCard;
