import type { NextPage } from 'next'
import Head from 'next/head'
import { Root, GlobalStyles } from 'styles';
import HeadingSection from 'components/HeadingSection';
import DescriptionSection from 'components/DescriptionSection';
import ContactInfo from 'components/ContactInfo';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KAROL KOSEK</title>
        <meta name="description" content="Portfolio page of Karol Kosek - a Front End developer based in Kraków, Poland" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Root>
        <HeadingSection />
        <DescriptionSection />
        <ContactInfo />
      </Root> 
    </>
  )
}

export default Home
