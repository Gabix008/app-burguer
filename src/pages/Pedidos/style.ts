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
    margin-top: 10%;
    font-size: 24px; 
    text-transform: uppercase;
    /* color:  #F9AF42; */
    text-align: center;
    margin-bottom: 5px;
}
.btn-burguer{
    margin-top: 5%;
    margin-left: 35%;
}

h3{
    margin-bottom: 15px;
}

h2{
    color: #F9AF42;
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
    width: 250px;
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
`
export default Component