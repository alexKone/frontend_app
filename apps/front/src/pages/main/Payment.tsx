import { readSync } from "fs";
import { useEffect, useState } from "react";

const SuccessDisplay = ({ sessionId }: { sessionId: string }) => {
  return (
    <section>
      <div className="product Box-root">
        {/* <Logo /> */}
        <div className="description Box-root">
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }: { message: string}) => (
  <section>
    <p>{message}</p>
  </section>
);

const Payment = () => {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [sessionId, setSessionId] = useState<string|null>('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(true)
      setMessage(
        'Order canceled -- continue to shop around and checkout when you\'re ready.'
      );
    }
  }, [sessionId])

  if (!success && message === '') {
    console.log("!success && message === ''");

  } else if (success && sessionId !== '') {
    return (
      <section>
      <div className="product Box-root">
        {/* <Logo /> */}
        <div className="description Box-root">
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId||''}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
    )
  } else {
    return <Message message={message} />;
  }

  return (
    <div>payment</div>
  )
}

export default Payment;
