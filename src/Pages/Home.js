import { Navbar } from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Navbar/Navbar.js";
import { Hero } from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Hero/Hero.js";
import { Feature } from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Feature/Feature.js";
import { Feedback } from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Feedback/Feedback.js";
import Achievements from "../Components/Achievements/Achievements.js";
import Product from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Product/Product.js";
import Footer from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Footer/Footer.js";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievements />
      <Feature />
      <Product />
      <Feedback />
      <Footer />
    </>
  );
};
export default Home;
