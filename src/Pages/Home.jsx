import AcordionHome from "../Components/AcordionHome";
import BuscaPassagem from "../Components/BuscaPassagem";
import FavoritosHome from "../Components/FavoritosHome";
import Footer from "../Components/Footer";
import HomeInternacional from "../Components/HomeInternacional";
import HomeNacional from "../Components/HomeNacional";
import NavBar from "../Components/NavBar";
import PromoHome from "../Components/PromoHome";
import ImgHeader from "./../assets/images/headers.png";
const Home = () => {
  return (
    <div>
      <NavBar />
      <img src={ImgHeader} className="imgHeader" />
      <BuscaPassagem />
      <PromoHome />
      <HomeInternacional />
      <HomeNacional />
      <AcordionHome />
      <FavoritosHome />
      <Footer />
    </div>
  );
};
export default Home;
