const LandingPage = ({ currentUser, tickets }) => { // request executed from the browser
  console.log(tickets);

  return currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>
}

// get the context, client axios and current user from the parent _app component
LandingPage.getInitialProps = async (context, client, currentUser) => {  // Request executed on the server / client k8 pod
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;