import Footer from "../footer/footer.component";
import Meta from "../meta/Meta.component";
import Navbar from "../navbar/Navbar.component";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
