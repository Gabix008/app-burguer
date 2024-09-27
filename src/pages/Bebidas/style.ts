import styled from "styled-components";

const Component = styled.div`
/* background-color: red; */

h1{
    text-align: center;
    margin-top: 35px;
    margin-bottom: 55px;
    color: #FF3131;
    text-transform: uppercase;
    font-weight: bolder;
}

.box{
    width: 750px; 
    background-color: transparent; 
    border: 2px solid #F2E5D4; 
    margin-top: 25px;
    margin: 0 auto;
    padding: 0; 
    margin-bottom: 50px;
}

.container{
    margin-bottom: 50px;
}

.image-text-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.text-content h4 {
    margin-top: 10%;
    font-size: 24px; 
    text-transform: uppercase;
    color: #F9AF42;
    text-align: center;
    margin-bottom: 15px;
}
img{
    width: 150px;
    margin: 15px;
    border-radius: 10px;
}
.btn-burguer{
    background-color: #F9AF42;
    width: 5vw;
    border: none;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
}

.btn-burguer a{
    text-decoration: none;
    color: #000;
    justify-content: center;
}
p{

    margin-bottom: 15px;
    color: #000;
    font-weight: bold;
    font-size: 20px;
}
`
export default Component;