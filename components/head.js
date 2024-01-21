import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "Blossom: Atlanta's Day of Service";
    const description = "Website for Blossom, a Hack Club Day of Service in Atlanta, GA.";
    const searchBarColor = "#ffffff"; // This is your Safari 15 Search Bar Color in Light Mode
    //const darkSearchBarColor = "#000000"; // This is your Safari 15 Search Bar Color in Dark Mode (optional)
    const keywords = "blossom, hack club blossom, blossom hack club, hack club days of service, hack club days of service blossom, blossom girl scouts, girl scouts coding event, girl scouts hackathon, blossom hackathon, hack club days of service atlanta, days of service atlanta, atlanta georgia girl scouts hackathon, atlanta blossom, georgia days of service";
    const author = "Sahiti Dasari";
    const twitter = " ";
    const url = "http://localhost:3000"; // This is your og:url or domain (optional but recommended)
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="theme-color" content={searchBarColor} media="(prefers-color-scheme: light)" />
            {/* <meta name="theme-color" content={darkSearchBarColor} media="(prefers-color-scheme: dark)" /> */}
            {url ? <meta property="og:url" content={url} /> : ''}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {/* Add analytics here */}
            {children}
        </Head>
    )
}
