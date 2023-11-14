import React from 'react';
import Layout from './_layout';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Testimonials from '@components/layout/home/Testimonials';
import Masthead from '@components/layout/home/Masthead';
import Companies from '@components/shared/Companies';
import MastheadBottom from '@components/layout/home/MastheadBottom';

export default function Index() {
  const router = useRouter();
  
  return(
    <Layout>
      <NextSeo
        title='Özbey İnşaat & Mimarlık'
        description='Gerek kentsel dönüşüm projesi olarak gerekse kat karşılığı yaptığımız tüm projelerimizde öncelik olarak sizin hayallerinizi gerçekleştirmek için buradayız.'
      />
      <Masthead>
        <MastheadBottom/>
      </Masthead>
      <Companies/>
      <Testimonials/>
    </Layout>
  )
}