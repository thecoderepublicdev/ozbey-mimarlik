import React from 'react';
import Layout from './_layout';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Testimonials from '@components/layout/home/Testimonials';
import Masthead from '@components/layout/home/Masthead';
import Companies from '@components/shared/Companies';
import MastheadBottom from '@components/layout/home/MastheadBottom';
import Loading from '@components/layout/Loading';

export default function Index() {
  const router = useRouter();
  
  return(
    <Layout>
      <NextSeo
        title='Özbey İnşaat & Mimarlık'
        description='Gerek kentsel dönüşüm projesi olarak gerekse kat karşılığı yaptığımız tüm projelerimizde öncelik olarak sizin hayallerinizi gerçekleştirmek için buradayız.'
      />
      {/* <Loading/> */}
      <Masthead>
        <MastheadBottom backgroundColor={"bg-white"} titleColor="text-gray-950" descColor="text-gray-950/50" borderClass="after:left-0 after:bottom-0 after:w-14 mb-4 after:h-1 pb-5 after:bg-brand-primary"/>
      </Masthead>
      <Companies/>
      <Testimonials/>
    </Layout>
  )
}