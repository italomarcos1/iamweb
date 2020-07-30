import React from "react";
import Global from "./global";

import { Container, Header, Main, Options, Highlight } from "./styles";

import icon1 from "./assets/icon.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import cards from "./assets/cards.png";

function App() {
  return (
    <>
      <Global />
      <Container>
        <Header>
          <div className="bg" />
          <div className="content-wrap">
            <h1>Você é um profissional?</h1>
            <button>Cadastre-se gratuitamente</button>
          </div>
        </Header>
        <Main>
          <Options>
            <h1>Participe do maior aplicativo de MG</h1>
            <small>
              Tenha os seus serviços a venda no maior aplicativo de Minas
              Gerais, selecione a área geográfica que deseja atuar e os serviços
              que oferece. Deixe a divulgação conosco!
            </small>
            <ul>
              <li>
                <img src={icon1} alt="Register Yourself" />
                <strong>Cadastre-se gratuitamente</strong>
                <small>
                  Participe do maior aplicativo de serviços de MG, cadastre-se
                  em 2 minutos.
                </small>
              </li>
              <li>
                <img src={icon2} alt="Pick your location" />
                <strong>Seleciona a Localização</strong>
                <small>
                  Selecione a área geográfica que deseja atuar e os serviços que
                  oferece.
                </small>
              </li>
              <li>
                <img src={icon3} alt="Now let's make money" />
                <strong>Agora é só Faturar</strong>
                <small>
                  Nós divulgamos e vendemos o seu serviço em um APP com milhares
                  de clientes.
                </small>
              </li>
            </ul>
          </Options>
          <Highlight>
            <div>
              <h1>Destaque o seu serviço</h1>
              <small>
                Tenha o seu serviço em destaque na página inicial do aplicativo
                com o valor da sua hora/serviço e promoções pontuais além da
                distância para o cliente.
              </small>
              <button>Cadastre-se Gratuitamente</button>
            </div>
            <img src={cards} alt="" />
          </Highlight>
        </Main>
        <footer id="main-footer" className="grid">
          <div>Acme Web Solutions</div>
          <div>Project by Cookiemonstah</div>
        </footer>
      </Container>
    </>
  );
}

export default App;
