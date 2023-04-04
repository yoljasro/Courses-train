import "../styles/globals.css";
import { Layout } from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if ([`/sign-in`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/sign-up`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <div>
        <Script type="text/javascript" id="script">
          {` window.replainSettings = { id: 'f15c163b-fd3e-4ae6-8bc9-deb7ed4b4cd4' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js')`}
          ;
        </Script>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      </div>
    );
  };  

  return <div>{getContent()}</div>;
}

export default MyApp;
