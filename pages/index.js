import React from 'react';
import Layout from './_layout';
import Hero from '@home/Hero'
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Space from '@components/shared/Space';

export default function Index() {
  const router = useRouter();
  console.log(router);

  return(
    <Layout>
      <NextSeo
        title='Özbey İnşaat & Mimarlık'
        description='Gerek kentsel dönüşüm projesi olarak gerekse kat karşılığı yaptığımız tüm projelerimizde öncelik olarak sizin hayallerinizi gerçekleştirmek için buradayız.'
      />
      <Hero/>
    </Layout>
  )
}