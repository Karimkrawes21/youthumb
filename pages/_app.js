
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

        {/* Custom paragraph placed under the heading */}
        <div className="custom-paragraphs">
          <p>
            ▷ Save YT Video Thumbnails
            Unlock the power to access free thumbnail images from any YouTube video in various resolutions, including Full HD (1080), HD (720), SD, and smaller sizes. Our platform supports a wide range of YouTube video formats, from standard to high-quality (HQ), 1080p, and even 4K videos.
          </p>
          {/* Add more custom paragraphs here as needed */}
        </div>

        {/* Rest of your code */}
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
