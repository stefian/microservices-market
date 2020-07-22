const OrderShow = ({ order }) => {
  return <div>OrderShow</div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;  // like the title of the file [orderId]
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;