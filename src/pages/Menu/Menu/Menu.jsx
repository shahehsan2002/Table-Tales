import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu | Table Tales</title>
      </Helmet>
      <Cover img={menuImg} title="OUR MENU"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      
    </div>
  );
};

export default Menu;
