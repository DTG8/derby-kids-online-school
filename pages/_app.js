import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import '@/styles/globals.css'
import Layout from '@/Layout'
import SplashScreen from '@/components/SplashScreen'

export default function App({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  useEffect(() => {
    // Check if splash has been shown this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setShowSplash(false);
      setSplashComplete(true);
    } else {
      // Show splash for 2.5 seconds then fade out
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Derby Kids Online School - Quality online education for children worldwide" />
        <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
      </Head>
      <SplashScreen
        isVisible={showSplash}
        onComplete={() => setSplashComplete(true)}
      />
      <div style={{ visibility: splashComplete ? 'visible' : 'hidden' }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}
