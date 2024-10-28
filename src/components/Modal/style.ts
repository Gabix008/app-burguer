import styled from "styled-components";

const ContainerModal = styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 26vw;
  height:65vh;
  background-color: #fff;
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: column;
  align-items: center;

.modal-title{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #F9AF42;

}
h4{
    margin-top: 35px;
    margin-left: 5px;
    margin-bottom: 5px;
    font-weight: bolder;
}

.pagamentos{
    display: flex;
    flex-direction: column; 
    margin-left: 15px;
}
.pagamentos label{
    margin-top: 5px;
    margin-bottom: 10px;
    
}

.input{
    width: 40%;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
}

button{
height: 40px;
width: 25%;
margin-left: 5%;
margin-top:15px;
background-color: #F9AF42;
border: none;
border-radius: 5px;
color: #fff;
cursor: pointer;
}

.icon{
margin-right: 5px;
margin-left: 5px;
}
`

export default ContainerModal;