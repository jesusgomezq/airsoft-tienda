import HomePageProductCard from "../../components/HomePageProductCard/HomePageProductCard";
import Layout from "../../components/Layout/Layout";
import Track from "../../components/Track/Track";
import Arrived from "../Arrived/Arrived";

const HomePages = () => {
  return (
    <Layout>
      <HomePageProductCard />
      <Track />
      <Arrived />
    </Layout>
  );
};

export default HomePages;
