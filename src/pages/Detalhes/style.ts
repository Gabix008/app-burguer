import styled from "styled-components";

const Component = styled.div`
.detail-burguer{
    display: flex;
    flex-direction: column;
    width: 55%;
    margin: 0 auto;
    grid-template-columns: repeat(2, 2fr); 
    gap:17px;
}
.detail-burguer img{
    margin-top:55px;
    border-radius: 8px;
}
.btn-burguer{
    margin-bottom: 2%;
    background-color: #F9AF42;
    width: 5vw;
    border: none;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    text-decoration: none;
    color: #000;
    justify-content: center;
    cursor: pointer;
}
.detail-burguer p{
    
    font-size: 20px;
}
.detail-burguer input{
width: 35%;
padding: 2%;
}

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

`
export default Component;