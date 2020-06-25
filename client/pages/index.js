import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => { // request executed from the browser
  // console.log(currentUser);
  // axios.get('/api/users/currentuser'); // from browser baseURL = ''
  console.log(currentUser);

  return <h1>Landing Page</h1>
}

LandingPage.getInitialProps = async (context) => {  // Request executed on the server / client k8 pod
  const { data } = await buildClient(context).get('/api/users/currentuser');

  return data;
};

export default LandingPage;