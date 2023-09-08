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

        {/* Provided paragraph */}
        <p>
          ▷ Zapisuj miniaturki wideo z YouTube
          Odblokuj możliwość dostępu do darmowych miniatur z dowolnego wideo na YouTube w różnych rozdzielczościach, w tym w pełnym HD (1080), HD (720), SD i mniejszych rozmiarach. Nasza platforma obsługuje szeroki zakres formatów wideo na YouTube, od standardowych po wysokiej jakości (HQ), 1080p, a nawet filmy 4K.
        </p>
        {/* Rest of your code */}
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;

