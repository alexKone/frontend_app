import CheckoutForm from "apps/front/src/components/Checkout/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Checkout = () => {
  const stripePromise = loadStripe('pk_test_fvEJPPpkJtvEcu7sJAprgWL1');

  const getProduct = async () => {
    const response = await fetch(`http://localhost:1337/strapi-stripe/getProduct/1`);
    const data = await response.json();
    return await data;
  }

  useEffect(() => {
    getProduct().then(data => console.log({ data }))
  })

  return (
    <>
      <Helmet>
      </Helmet>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  )
}

export default Checkout;
