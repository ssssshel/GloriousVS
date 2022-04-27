import Head from "next/head";

const HeadLayout = ({ section, description }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Glorious | {section}</title>
    </Head>
  );
};

export default HeadLayout;
