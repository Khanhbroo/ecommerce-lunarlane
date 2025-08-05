import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <h2>Footer</h2>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.isRequired,
};
