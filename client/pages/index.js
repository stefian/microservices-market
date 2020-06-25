import axios from 'axios';

const LandingPage = ({ currentUser }) => { // request executed from the browser
  // console.log(currentUser);
  // axios.get('/api/users/currentuser'); // from browser baseURL = ''
  console.log(currentUser);

  return <h1>Landing Page</h1>
}

LandingPage.getInitialProps = async () => {  // Request executed on the server / client k8 pod
  if (typeof window === 'undefined') {  // window only exists on the browser / not on server
    // we are on the server
    // => requests should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
    // http://SERVICENAME.NAMESPACE.svc.cluster.local
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', {
      headers: {
        Host: 'aibazar.dev'
      }
    }
    );

    return data;
  } else {
    // we are on the browser!
    // requests can be made with a base url of '' - the browser will put the base url for us
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }
  return {};
};

export default LandingPage;