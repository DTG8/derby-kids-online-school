import React from 'react'
import Head from 'next/head'
import '@/styles/globals.css'
import Layout from '@/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Derby Kids Online School - Quality online education for children worldwide" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
