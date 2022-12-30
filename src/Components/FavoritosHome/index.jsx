

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
              src="https://thumbcdn-9.hotelurbano.net/-Bz008nKBzCgDvi8E7aLtoszNb0=/1240x0/center/middle/filters:format(webp):strip_icc()/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2022/07/05/11/43/amazing_sunset_in_fernando_de_noronha_brazil_picture_id1177136733.jpg"
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
              src="https://thumbcdn-4.hotelurbano.net/iDo9B1UqBK5N4RGEGxMUi_q-mQY=/1240x0/center/middle/filters:format(webp):strip_icc():quality(80)/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2022/10/05/12/45/shutterstock_1283691793.jpg"
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
              src="https://thumbcdn-8.hotelurbano.net/OT8h5L05M30wicToCxNQnIYPK5Q=/1240x0/center/middle/filters:format(webp):strip_icc():quality(80)/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2022/08/12/09/28/colosseum_in_rome_with_morning_sun_picture_id1290101405.jpg"
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
              src="https://thumbcdn-6.hotelurbano.net/fI0OMiIeliL5uhh-1LHc_kJJiY4=/1240x0/center/middle/filters:format(webp):strip_icc()/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2022/11/25/15/12/iStock_1347242750.jpg"
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
              src="https://thumbcdn-c.hotelurbano.net/X5gXVREc1TOPe_55PWrf3rf2GIg=/1240x0/center/middle/filters:format(webp):strip_icc()/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2022/08/16/16/16/shutterstock_1927743911.png"
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
              src="https://thumbcdn-6.hotelurbano.net/tw534aVJdXx0ro03BTXPHG8s-Bk=/1240x0/center/middle/filters:format(webp):strip_icc()/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2022/08/29/16/07/old_cabildo_town_hall_of_buenos_aires_picture_id1324335093.jpg"
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
              src="https://thumbcdn-1.hotelurbano.net/WYjIN41Z-Sn2PiDZCbLgFCOKIqY=/1240x0/center/middle/filters:format(webp):strip_icc()/http://s3.amazonaws.com/legado-prod/prod/ofertas/imagens/2022/09/23/15/04/iStock_1420767973.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FavoritosHome;
