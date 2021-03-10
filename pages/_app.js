import Layout from "../components/layout/Layout.component";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="py-10 md:py-20 px-3 tracking-wide leading-normal md:px-10 text-gray-700 bg-gray-100">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
