import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Pobieracz miniatur z YouTube"
        description="Pobierz wysokiej jakości miniaturki z filmów na YouTube."
        canonical="https://twój-adres-strony.pl"
        openGraph={{
          url: "https://twój-adres-strony.pl",
          title: "Pobieracz miniatur z YouTube",
          description: "Pobierz wysokiej jakości miniaturki z filmów na YouTube.",
          site_name: "Pobieracz miniatur z YouTube",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
