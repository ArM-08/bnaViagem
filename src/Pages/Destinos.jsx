import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import BuscaPassagem from "../Components/BuscaPassagem";
import ImgHeader from "./../assets/images/headers.png";

const Destinos =() => {
    return (
        <div>
        <NavBar/>
        <img src={ImgHeader} style={{ width: "100vw" }} />
      <BuscaPassagem />

        <Footer/>
        </div>
    )
}
export default Destinos;