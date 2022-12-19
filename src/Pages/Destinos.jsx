import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import BuscaPassagem from "../Components/BuscaPassagem";
import ImgHeader from "./../assets/images/headers.png";
import {  Row } from "antd";
import { DestinosNacionais, DestinosInternacionais } from "../Components/BdDestinos/DestinosCadastrados";
import CardPassagem from "../Components/CardPassagem";
import React from "react";
const Destinos =() => {



    return (
        <div>
        <NavBar/>
        <img src={ImgHeader} style={{ width: "100vw" }} />
      <BuscaPassagem />
       <Row
      style={{width: "70%", margin:"0 auto", marginBottom: "5vh"}}><h1>Destinos Nacionais</h1></Row>
       <Row
       style={{
        width: "70%",
        justifyContent: "space-around",
        gap: "2vh",
      margin:"0 auto"}}
        >
          
        {DestinosNacionais.map(destinos =>(
          <div>
          <CardPassagem 
          img = {[destinos.src]}
          title= {[destinos.nome]}
          diaria = {[destinos.diaria]}
          hospedagem = {[destinos.idaevolta]}
          passagemaerea = "Passagem Aérea"
          valor = {[destinos.valor]}
          parcelas = "em até 12x"
          /> 
          </div>
       ))}

      </Row>
      <Row
       style={{width: "70%", margin:"0 auto", marginBottom: "5vh", marginTop: "5vh"}}> <h1>Destinos Internacionais</h1></Row>
      <Row
       style={{
        width: "70%",
        justifyContent: "space-around",
        gap: "2vh",
      margin:"0 auto",
    marginBottom: "5vh",}}
        >
        {DestinosInternacionais.map(destinos =>(
          <CardPassagem 
          img = {destinos.src} 
          title= {destinos.nome}
          diaria = {destinos.diaria}
          hospedagem = {destinos.idaevolta}
          passagemaerea = "Passagem Aérea"
          valor = {destinos.valor}
          parcelas = "em até 12x"
          />
        ))}

      </Row>
        <Footer/>
        </div>
    )
}
export default Destinos;