import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import FAQ from "../../components/FAQ";
import GoogleMap from "../../components/GoogleMap";
import OurCustomers from "../../components/OurCustomers";
import TeamSection from "../../components/OurTeam";
import Services from "../../components/Services";
import TestimonialPage from "../../components/Testaimonials";
import ProductListing from "../Product/Product";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <section className="bg">
      <Banner />
      <ProductListing />
      <Services />
      <OurCustomers />
      <AboutUs />
      <TeamSection />
      <TestimonialPage />
      <FAQ />
      <ContactUs />
      <GoogleMap />
    </section>
  );
};

export default Home;
