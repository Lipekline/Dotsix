import styled from "styled-components";
import { fonts } from "../styles/global";
import ImagemFundo from "../assets/imagem-fundo.png";

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Texto = styled.text`
  color: #9e9e9e;
  font-size: 35px;
  font-weight: 800;
  font-family: ${fonts.karla};
`;

export const ContainerTexto = styled.div`
  display: flex;
  flex: 1;
  padding: 10% 0 0 10%;
`;

export const ContainerImagem = styled.div`
  position: absolute;
  z-index: -1;
  background-image: url(${ImagemFundo});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(15px);
`;
