import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <div className="content-right">
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
        {/* Your paragraph with inline style */}
        <p style={{ fontWeight: 'bold' }}>Pobierz miniaturę YouTube</p>

        {/* Rest of your code */}
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
