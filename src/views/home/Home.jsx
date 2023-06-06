import React from "react";
import Head from "./Head";
import OurBlogs from "./OurBlogs";
import OurProjects from "./OurProjects";
import OurReputation from "./OurReputation";
import OurServices from "./OurServices";
import Footer from "../../layouts/Footer";

function Home() {
  return (
    <div >
      <Head />
      <OurServices />
      <OurProjects />
      <OurReputation />
      <OurBlogs />
      <Footer />
    </div>
  );
}

export default Home;
