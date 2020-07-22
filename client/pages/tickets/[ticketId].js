const TicketShow = ({ ticket }) => {
  return <div>
    <h1>{ticket.title}</h1>
    <h4>Price: {ticket.price}</h4>
  </div>;
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query; // ticketId ~ like in the filename [ticketId].js
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data }
};

export default TicketShow;