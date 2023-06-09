import styled from "styled-components";

interface Props {
    img: string;
}

export const SceneBackground = styled.div<Props>`
  height: 100vh;
  width: 100vw;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachement: fixed;
  transition: all .3s ease-out;
`;