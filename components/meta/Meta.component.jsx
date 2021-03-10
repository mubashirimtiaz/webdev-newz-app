import Head from "next/head";
const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    </Head>
  );
};
Meta.defaultProps = {
  title: "WebDev Newz",
  description:
    "web development is the way to develop website that display on the browsers",
  keywords: "web development, programming",
};
export default Meta;
