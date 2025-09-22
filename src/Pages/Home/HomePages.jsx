import HomePageProductCard from "../../components/HomePageProductCard/HomePageProductCard";
import Layout from "../../components/Layout/Layout";
import Testimonial from "../../components/Testimonial/Testimonial";
import Track from "../../components/Track/Track";
import Arrived from "../Arrived/Arrived";

const HomePages = () => {
  return (
    <Layout>
      <HomePageProductCard />
      <Testimonial/>
      <Track />
      {/* <Arrived /> */}
    </Layout>
  );
};

export default HomePages;
