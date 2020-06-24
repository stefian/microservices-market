import 'bootstrap/dist/css/bootstrap.css';
// Wrapper for all Next Page Components / _app
// used for global imports in Next - like bootstrap above
export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};