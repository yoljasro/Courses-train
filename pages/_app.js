import "../styles/globals.css";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps, ...appProps }) {
  // make function that will return the children based on router.pathname

  const getContent = () => {
    // array of all the paths that doesn't need layout
    if ([`/sign-in`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
      if ([`/sign-up`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };

  return <div>{getContent()}</div>;
}

export default MyApp;
