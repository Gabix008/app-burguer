import styled from "styled-components";

const ContainerRodape = styled.div`
  width: 100vw;
  height: 50vh auto ; 
  background-color: #492624;
  flex-direction: column;
  align-items: center; 
  gap: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
 
  .info {
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 20px; 
  }

  img {
    width: auto;
    grid-column:1/-1;
    margin-left: 45%;
    height: auto;
    margin-bottom: 15px; 
  }

  h1 {
    color: #fff;
    margin: 0; 
  }

  p {
    margin-top: 10px; 
    color: #fff;
  }
  .ContainerDireitos{
    color: #fff;
    border-top: 1px solid #5F3836;
    display: flex;
    justify-content: center;
    grid-column: 1 / -1;
  }
`

export default ContainerRodape;