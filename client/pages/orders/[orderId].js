import { useEffect, useState } from 'react';

const OrderShow = ({ order }) => {
  const [timeLeft, setTimeLeft] = useState(0); // to help rendering once

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

  return <div>Time left to pay: {timeLeft} seconds</div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;  // like the title of the file [orderId]
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;