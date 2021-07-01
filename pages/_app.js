/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import '../styles/globals.css'
import "../styles/tailwind.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary Meta Tags */}
        <title>John McCarthy for State's Attorney</title>
        <meta name="title" content="John McCarthy for State's Attorney" />
        <meta name="description"
          content="John McCarthy for Montgomery County State's Attorney - A Record of Reform and Innovation" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.johnmccarthy.us/" />
        <meta property="og:title" content="John McCarthy for State's Attorney" />
        <meta property="og:description"
          content="ohn McCarthy for Montgomery County State's Attorney - A Record of Reform and Innovation" />
        <meta property="og:image" content="/newImages/meta_image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://www.johnmccarthy.us/" />
        <meta property="twitter:title" content="John McCarthy for State's Attorney" />
        <meta property="twitter:description"
          content="John McCarthy for Montgomery County State's Attorney - A Record of Reform and Innovation" />
        <meta property="twitter:image" content="/meta_image.jpg" />
      </Head>
      <div className="flex flex-col items-center justify-start min-h-screen">
        <img src="/md_flag.png" className="absolute top-0 left-0 w-1/2" alt="Maryland Flag" />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
