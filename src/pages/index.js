import { useEffect } from 'react';

import Typist from 'react-typist';
import { 
  Container, 
  TitleContainer, 
  Title1, 
  Title2, 
  InputContainer, 
  BackgroundImage,
  ServicesContainer
} from '../styles/pages/Home';
import backgroundImage from '../assets/background.png';

import axios from 'axios';

export default function Home() {

  useEffect(() => {
    axios.get('api/users').then(response => console.log(response.data));
  },[]);

  return (
    <div>
      <Container>
        <section>
          <TitleContainer>
            <Typist cursor={{ show: false}} >
              <Title1>Seja parceiro da</Title1>
              <Title2>Amodev</Title2>
            </Typist>
            <span>
              Aqui seu estoque<br/>
              pode virar dinheiro<br/>
              em pouco tempo
            </span>
          </TitleContainer>

          <form action="">
            <InputContainer>
              <div>
                <input name="name" type="text"/>
                <label htmlFor="name">Nome</label>

                <input name="email" type="email"/>
                <label htmlFor="email">E-mail</label>

                <input name="phone" type="text"/>
                <label htmlFor="phone">Telefone</label>
              </div>

              <div>
                <input name="company" type="text"/>
                <label htmlFor="company">Empresa</label>

                <input name="city" type="text"/>
                <label htmlFor="city">Cidade</label>
              </div>
            </InputContainer>
            <button>Enviar</button>
          </form>
        </section>
         <BackgroundImage src={backgroundImage} alt="Amodev" layout="fill" />
        <main>
          <Title1>
            Vantagens de ser parceiro<br/>
            da AutoSim
          </Title1>

          <ServicesContainer>
            <div>
              <img src={require("../assets/icon4.jpeg")} alt="ícon"/>
              <span>
                Canal para venda de<br/>
                veículos entre lojistas
              </span>
            </div>

            <div>
              <img src={require("../assets/icon.jpeg")} alt="ícon"/>
              <span>
                Canal para compra de<br/>
                veículos Repane ou vigentes<br/>
                em leilão (bird ou line)
              </span>
            </div>

            <div>
              <img src={require("../assets/icon3.jpeg")} alt="ícon"/>
              <span>
                Documento 100%<br/>
                verificado previmente
              </span>
            </div>

            <div>
              <img src={require("../assets/icon2.jpeg")} alt="ícon"/>
              <span>
                Network e grande variedade<br/>
                de veículos ano e modelos
              </span>
            </div>
          </ServicesContainer>
        </main>
      </Container>
    </div>
  )
}
