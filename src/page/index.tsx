import React from "react";
import { Container, ContainerImagem, ContainerTexto, Texto } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerTexto>
        <Texto>CREATE ACCOUNT</Texto>
      </ContainerTexto>
      <ContainerImagem />
    </Container>
  );
};
export default Home;
