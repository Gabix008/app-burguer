import styled from "styled-components";

const Component = styled.div`
/* background-color: red; */
width: 100vw;

.conteudo-topo{
display: inline-flex;
    img{
    width: 25%;
    height: 50%;
    margin-left: 27%;
    margin-top: 50px;
    border-radius: 8px;
    /* position: absolute; */
    }
    h2{
        margin-top:200px;
        margin-left: 85px;
        text-transform: uppercase;
        color: #F9AF42;
    }
    h1{
        color: #FF3131 ;
    }
}

.conteudo-principal{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: #fff;
    width: 50%;
    margin-left: 25%;
    h3{
        color: #F9AF42;
       text-transform: uppercase;
       margin-top: 50px;
    }
    h1{
        color: #FF3131;
    }
    img{
        width: 300px;
        height: 300px;
        border-radius: 8px;
    }
    .swiper {
        width: 600px;
        height: 300px;
    }
    i{
        color: red;
    }
    p{
        font-weight: bold;
        margin-bottom: 35px;
    }
    .btn-combo a{
      color: #FF3131;
      text-decoration: none;
    }
    .btn-combo{
        border: 1px solid #FF3131;
        width: 20%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        margin-bottom: 90px;
        background-color: transparent;
    }
}
`
export default Component;