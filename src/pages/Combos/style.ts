import styled from "styled-components";

const Component = styled.div`

h1{
    text-align: center;
    margin-top: 25px;
    /* margin-bottom: 5px; */
    color: #FF3131;
    text-transform: uppercase;
    /* font-family: Bebas Neue; */
    font-weight: bolder;
}
img{
    width: 375px;
    margin: 15px;
    border-radius: 10px;
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
    display: grid;
    width: 55%;
    margin: 0 auto;
    grid-template-columns: repeat(2, 2fr); 
    /* margin-bottom: 55px; */
    gap:17px;
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
.btn-burguer{
    margin-top: 5%;
    margin-left: 35%;
    cursor: pointer;
}
span{
    color: #F9AF42;
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
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  border-radius:10px;
  width: 45%;
  height: 100%;
  margin-bottom: 55px;
  object-fit: cover;
}

.mySwiper img{
    width: 30%;
}

.link{
    text-decoration: none;
}
`

export default Component;