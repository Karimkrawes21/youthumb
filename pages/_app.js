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

        {/* Provided paragraphs */}
        // ... (previous code)

        <div className="custom-paragraphs">
  <p>
    ▷ Save YT Video Thumbnails
    Unlock the power to access free thumbnail images from any YouTube video in various resolutions, including Full HD (1080), HD (720), SD, and smaller sizes. Our platform supports a wide range of YouTube video formats, from standard to high-quality (HQ), 1080p, and even 4K videos.
  </p>
  <p>
    What's the Purpose of this YouTube Thumbnail Grabber Website?
    Our YouTube Thumbnail Downloader is a valuable tool for users seeking to extract thumbnails from YouTube videos. These extracted thumbnails can be utilized in presentations, animation projects, and a myriad of other creative activities.
  </p>
  <p>
    How to Utilize this YouTube Thumbnail Downloader Website?
    Using our platform is a breeze. Here's a step-by-step guide:
  </p>
  <ol>
    <li>Copy the link of the YouTube video from which you want to download the thumbnail.</li>
    <li>Paste the video URL into the input box provided.</li>
    <li>As soon as you paste the link, our system will automatically generate thumbnails in different sizes for you.</li>
    <li>Click on the thumbnail download button, and the image will be promptly downloaded to your device.</li>
  </ol>
  <p>
    For Android users, you can save the downloaded images directly to your phone. However, for iPhone users, the process may differ, and you might need to consult other sources for assistance.
  </p>
  <p>
    Is it Legal to Download YouTube Thumbnails?
    Absolutely, it's 100% legal to download YouTube video thumbnails. However, it's crucial to note that both the video and its thumbnail are copyrighted products. To avoid any legal issues, always seek permission from the content creator before reusing their materials.
  </p>
  <p>
    Compatibility of our YT Thumbnail Grabber Website
    Our YouTube Thumbnail Downloader works seamlessly on various devices, including Android phones, laptops, and desktop systems. However, it's worth mentioning that iPhones may present some limitations when it comes to saving images directly. If you have a jailbroken iPhone, this won't be an issue.
  </p>
  <p>
    Are There Copyright Risks Associated with YouTube Thumbnails?
    The thumbnails you download from YouTube videos remain the copyright of the respective video owners. If you plan to use them in your work, it's essential to obtain proper permissions, especially if you intend to reuse them within the YouTube platform. However, for purposes outside of YouTube, such as creating logos or using them in Photoshop projects, copyright issues are less likely to arise.
  </p>
  <p>
    Is Reusing YouTube Thumbnails SEO Friendly?
    In short, reusing YouTube thumbnails is not considered SEO friendly. Google indexes almost all thumbnails on YouTube, making it easy to identify duplicates. However, you can enhance the SEO-friendliness of a reused thumbnail by adding unique effects using software like Photoshop. This way, you can make the thumbnail stand out and improve its search engine optimization.
  </p>
</div>

{/* Rest of your code */}
<Component {...pageProps} />
</div>
</Fragment>
);
}

export default MyApp;
