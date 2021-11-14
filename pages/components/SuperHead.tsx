import Head from "next/head";

interface SuperHeadProps {
  title?: string;
}

function SuperHead({ title }: SuperHeadProps): JSX.Element {
  return (
    <Head>
      <title>{title ? title : "UTD Lost & Found"}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Anaheim&family=Bebas+Neue&display=swap" rel="stylesheet" />
    </Head>
  )
}

export default SuperHead;
