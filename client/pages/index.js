const LandingPage = ({ currentUser }) => { // request executed from the browser
  return currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>
}

LandingPage.getInitialProps = async (context) => {  // Request executed on the server / client k8 pod
  return {}
};

export default LandingPage;