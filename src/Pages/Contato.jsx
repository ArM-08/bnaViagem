import CardAjuda from "../Components/CardAjuda";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Row} from "antd";
import ModalForm from "../Components/ModalForm";


const Contato =() => {

    
    return (
    <div>
        <NavBar/>
        <Row
       style={{
        width: "70%",
        justifyContent: "center",
        margin: "0 auto", 
        marginTop: "30px",
        marginBottom: "30px",}}

        ><h1>Como podemos te ajudar?</h1></Row>
        <Row
        style={{
          width: "70%",
          justifyContent: "center",
    gap:"10px",
          margin: "0 auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
            <CardAjuda
            title="Sobre o Cancelamento"
            descricao="Entenda como realizar o cancelamento online, nosso regulamento e formas de cancelamento."
            />
            <CardAjuda
            title="Alterações na Reserva"
            descricao="Entenda sobre nossas remarcações, alterações e possíveis personalizações das ofertas!"
            />
            <CardAjuda
            title="Minha Conta"
            descricao="Saiba como acessar sua conta Bruh, alterar seu e-mail e senha, visualizar seus pedidos/confirmações, etc."
            />
            <CardAjuda
            title="Compras e Pagamentos"
            descricao="Saiba como comprar no Hurb, nossas formas de pagamento, como utilizar seus Hurb Créditos, etc."
            />
             <CardAjuda
            title="Boleto Vencido"
            descricao="Saiba como gerar um novo boleto para garantir a sua viagem!"
            />
            <CardAjuda
            title="COVID-19"
            descricao="Conheça as condições especiais de reagendamento, o que fazer se a fronteira está fechada, etc."
            />
            <CardAjuda
            title="Sobre a Bruh Viagem"
            descricao="Conheça quem somos, onde estamos, como entrar em contato com a gente, ser um parceiro e mais."
            />
            <CardAjuda
            title="Abertura de Solicitação"
            descricao="Pra quem não recebeu a documentação, quer abater boleto com crédito ou precisa de ajuda em viagem."
            />
            <CardAjuda
            title="Outros Produtos"
            descricao="Saiba mais sobre nossas ofertas de passagens hoteis e de ônibus."
            />
            </Row>
        <Row
        style={{width: "70%",
        margin:"0 auto", 
        marginBottom:"20px",
        justifyContent: "center",
        }}>
        <ModalForm/>

        </Row>

        <Footer/>
    </div>
    )
}
export default Contato;
