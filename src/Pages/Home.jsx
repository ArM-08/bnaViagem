import BuscaPassagem from "../Components/BuscaPassagem";
import NavBar from "../Components/NavBar";
import PromoHome from "../Components/PromoHome";
import ImgHeader from "./../assets/images/img_header_home.png";
const Home = () => {
  return (
    <div>
      <NavBar />
      <img src={ImgHeader} style={{ width: "100vw" }} />
      <BuscaPassagem />
      <PromoHome />
    </div>
  );
};
export default Home;
