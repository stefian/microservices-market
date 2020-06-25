import axios from 'axios';

const LandingPage = ({ currentUser }) => { // request executed from the browser
  // console.log(currentUser);
  // axios.get('/api/users/currentuser'); // from browser baseURL = ''

  return <h1>Landing Page</h1>
}

LandingPage.getInitialProps = async () => {  // Request executed on the server / client k8 pod
  // const response = await axios.get('/api/users/currentuser');

  // return response.data;
  console.log('I WAS EXECUTED');
  return {};
};

export default LandingPage;