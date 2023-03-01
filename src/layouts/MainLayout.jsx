import { Fragment } from "react";

import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";

const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
};

export default MainLayout;
