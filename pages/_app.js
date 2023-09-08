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
        {/* Your "Call to Action" section */}
        <div className="cta">
          {/* Your call to action content here */}
          <p style={{ fontWeight: 'bold' }}>Pobierz miniaturę YouTube</p>
        </div>

        {/* Provided paragraphs under "Call to Action" */}
        <p>
          ▷ Save YT Video Thumbnails
          Unlock the power to access free thumbnail images from any YouTube video in various resolutions, including Full HD (1080), HD (720), SD, and smaller sizes. Our platform supports a wide range of YouTube video formats, from standard to high-quality (HQ), 1080p, and even 4K videos.
        </p>
        <p>
          What's the Purpose of this YouTube Thumbnail Grabber Website?
          Our YouTube Thumbnail Downloader is a valuable tool for users seeking to extract thumbnails from YouTube videos. These extracted thumbnails can be utilized in presentations, animation projects, and a myriad of other creative activities.
        </p>
        {/* Rest of your code */}
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
