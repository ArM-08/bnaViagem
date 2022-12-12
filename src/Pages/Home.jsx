import AcordionHome from "../Components/acordionHome";
import BuscaPassagem from "../Components/BuscaPassagem";
import FavoritosHome from "../Components/FavoritosHome";
import Footer from "../Components/Footer";
import HomeInternacional from "../Components/HomeInternacional";
import HomeNacional from "../Components/HomeNacional";
import NavBar from "../Components/NavBar";
import PromoHome from "../Components/PromoHome";
import ImgHeader from "./../assets/images/img_header_home.png";
const Home = () => {
  return (
    <div>
      <NavBar />
      <img src={ImgHeader} style={{ width: "100vw" }} />
      <BuscaPassagem />
      <PromoHome/>
      <HomeInternacional/>
      <HomeNacional/>
      <AcordionHome/>
      <FavoritosHome/>
      <Footer/>
    </div>
  );
};
export default Home;
