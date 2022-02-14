import type { NextPage } from 'next'
import Head from 'next/head'
import { Root, GlobalStyles } from 'styles';
import HeadingSection from 'components/HeadingSection';
import DescriptionSection from 'components/DescriptionSection';
import ProjectsSection from 'components/ProjectsSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KAROL KOSEK</title>
        <meta name="description" content="Portfolio page for Karol Kosek - the Front End developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Root>
        <HeadingSection />
        <DescriptionSection />
        <ProjectsSection />
      </Root>
    </>
  )
}

export default Home
