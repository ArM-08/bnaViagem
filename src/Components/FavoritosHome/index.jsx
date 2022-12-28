import Madrid from "./../../assets/images/madrid.png";
import Paris from "./../../assets/images/paris.png";
import Rio from "./../../assets/images/rio.png";
import Noronha from "./../../assets/images/noronha.png";
import Roma from "./../../assets/images/roma.png";
import Vitoria from "./../../assets/images/vitoria.png";
import Bruxelas from "./../../assets/images/bruxelas.png";

const FavoritosHome = () => {
  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <h1 style={{ marginTop: "20px" }}>Destinos que todo mundo ama</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 10fr)",
          gridTemplateRows: "repeat(2, 10vw)",
          gridGap: "1vh",
          marginTop: "2vh",
          marginBottom: "2vh",
        }}
      >
        <div
          style={{
            gridColumnStart: "1",
            gridColumnEnd: "4",
            gridRowStart: "1",
            gridRowEnd: "3",
          }}
        >
          <a href="">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              src={Noronha}
            />
          </a>
        </div>
        <div
          style={{
            gridColumnStart: "4",
            gridColumnEnd: "5",
            gridRowStart: "1",
            gridRowEnd: "2",
          }}
        >
          <a href="">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              src={Rio}
            />
          </a>
        </div>
        <div
          style={{
            gridColumnStart: "5",
            gridColumnEnd: "6",
            gridRowStart: "1",
            gridRowEnd: "2",
          }}
        >
          <a href="">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              src={Vitoria}
            />
          </a>
        </div>
        <div
          style={{
            gridColumnStart: "6",
            gridColumnEnd: "7",
            gridRowStart: "1",
            gridRowEnd: "2",
          }}
        >
          <a href="">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              src={Paris}
            />
          </a>
        </div>
        <div
          style={{
            gridColumnStart: "4",
            gridColumnEnd: "5",
            gridRowStart: "2",
            gridRowEnd: "3",
          }}
        >
          <a href="">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              src={Roma}
            />
          </a>
        </div>
        <div
          style={{
            gridColumnStart: "5",
            gridColumnEnd: "6",
            gridRowStart: "2",
            gridRowEnd: "3",
          }}
        >
          <a href="">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              src={Bruxelas}
            />
          </a>
        </div>
        <div
          style={{
            gridColumnStart: "6",
            gridColumnEnd: "7",
            gridRowStart: "2",
            gridRowEnd: "3",
          }}
        >
          <a href="#">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              src={Madrid}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FavoritosHome;
