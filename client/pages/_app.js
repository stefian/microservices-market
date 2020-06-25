import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
// Wrapper for all Next Page Components / _app
// used for global imports in Next - like bootstrap above
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return <div>
    <h1>Header! {currentUser.email}</h1>
    <Component {...pageProps} />
  </div>
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data
  }
};

export default AppComponent;