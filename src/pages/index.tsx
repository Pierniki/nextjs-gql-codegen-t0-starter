import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <>
      <Head>
        <title>Starter</title>
        <meta name="description" content="Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.items.map((item) => item)}</main>
    </>
  );
};

export const getStaticProps = async () => {
  //example

  // const eventsResponse = await client.request(getEventsQueryDocument);

  return {
    props: {
      items: ['Hello', ' ', 'world']
    },
    revalidate: 60
  };
};

export default Home;
