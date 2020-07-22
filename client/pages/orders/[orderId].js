import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0); // to help rendering once
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id
    },
    onSuccess: () => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft(); // Call finction To avoid waiting 1000 ms before first rendering
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {  // this will cancell the interval when navigating from this component
      clearInterval(timerId);
    };
  }, [order]); // [] - empty array - to render once

  if (timeLeft < 0) {
    return <div>Order Expired</div>
  }

  return <div>
    Time left to pay: {timeLeft} seconds<br />
    <StripeCheckout
      token={({ id }) => doRequest({ token: id })}
      stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      amount={order.ticket.price * 100}
      email={currentUser.email}
    />
    {errors}
  </div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;  // like the title of the file [orderId]
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;