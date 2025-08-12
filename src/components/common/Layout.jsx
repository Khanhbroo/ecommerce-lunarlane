import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="h-[2000px]">
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
