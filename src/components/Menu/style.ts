import styled from "styled-components";

const ComponentMenu = styled.div`

background-color: #fff;
width: 100vw;
height: 90px ;
display: flex;
justify-content: center;
align-items: center;

.link a{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-right: 50px;
    text-decoration: none;
    color: #000;
    justify-content: center;
}

.btn-pedido {
    background-color: #F9AF42;
    width: 5vw;
    border: none;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    
}
.btn-pedido a{
    color: #000;
    text-align: center;
    text-decoration: none;
    
}
img{
    width: 90px;
    height: 90px;
    position:relative ;
    right: 350px;
}
`
export default ComponentMenu;