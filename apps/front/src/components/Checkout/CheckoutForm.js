import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { ChangeEvent, useState } from 'react';
import Cookies from 'js-cookie'
import CardSection from './CardSection';

const CheckoutForm = () => {
  const [data, setData] = useState({
    stripe_id: ''
  });
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  // const handleChange = (evt: ChangeEvent) => {
  //   const updateItem = (data[evt.target.name] = evt.target.value);
  // }

  const submitOrder = async (evt) => {
    evt.preventDefault();
    const cardElement = await elements.getElement(CardElement);
    const token = await stripe.createToken(cardElement);
    const userToken = Cookies.get('token');

    const response = await fetch()

  }

  const handleClick = (evt) => {
    evt.preventDefault();
    const elt = evt.target;
    console.log(elt.getAttribute('data-id'));
  }

  return (
    <div>
      <div></div>
      <button onClick={handleClick} className="css style" type="button" id="SS_ProductCheckout" data-id="1" data-url="http://localhost:1337"> Subscribe </button>
      <CardSection data={data} stripeError={error} submitOrder={submitOrder} />
    </div>
  )

}

export default CheckoutForm;
