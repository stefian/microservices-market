import Link from 'next/link';

const LandingPage = ({ currentUser, tickets }) => { // request executed from the browser
  const ticketList = tickets.map(ticket => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Services</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {ticketList}
        </tbody>
      </table>
    </div>
  );
}

// get the context, client axios and current user from the parent _app component
LandingPage.getInitialProps = async (context, client, currentUser) => {  // Request executed on the server / client k8 pod
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;