import styled from "styled-components";

const Component = styled.div`

h1{
    text-align: center;
    margin-top: 35px;
    margin-bottom: 35px;
    color: #FF3131;
    text-transform: uppercase;
    font-weight: bolder;
}
.box{
    width: 750px; 
    background-color: transparent; 
    margin-top: 25px;
    border-bottom: 2px solid #E4E4E4; 
    margin: 0 auto;
    padding: 0; 
    margin-bottom: 50px;
}

.box:last-child{
    border-bottom: none;
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
    margin-top: 2%;
    font-size: 24px; 
    text-transform: uppercase;
    /* color:  #F9AF42; */
    margin-bottom: 25px;
}
.btn-burguer{
    margin-top: 5%;
    margin-left: 35%;
}

h3{
    /* margin-bottom: 15px; */
}

h2{
    color: #F9AF42;
    margin-bottom: 35px;
}

.btn-burguer{
    background-color: #F9AF42;
    width: 12vw;
    border: none;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-radius: 15px;
}

.btn-burguer a{
    text-decoration: none;
    color: #000;
    justify-content: center;
}
img{
    width: 300px;
    margin: 15px;
    border-radius: 10px;
}
hr{
    border-color: #cecece;
    margin-top: 10px;
    margin-bottom: 10px;
}
hr:last-child{
    border:none; 
}

.btn-trash{
    background-color: #FF3131;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.sem-pedidos{
    margin-top: 10%;
    color: #F9AF42;
}
.trash{
    color: #fff;
}

/* .btn{
    background-color: #F9AF42;
    color: #fff;
    border: none;
    margin-left: 5px;
    border-radius: 2px;
    cursor: pointer;
} */
/* .quantidade{
    width: 29px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    border: 1px solid #cecece;
    border-radius: 2px;
} */
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.quantidade {
  font-size: 18px;
  font-weight: bold;
  padding: 0 10px;

}

.btn {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #F9AF42;
  color: #fff;
  font-size: 16px;
}
h3{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
}

.btn-finalizar{
    margin-bottom: 2%;
    background-color: #F9AF42;
    width: 8vw;
    border: none;
    height: 35px;
    border-radius: 15px;
    text-decoration: none;
    display: flex;

    align-items: center;
    margin-top: 15px;
    color: #000;
    justify-content: center;
    cursor: pointer;
    margin-left: 46%;
}
`
export default Component