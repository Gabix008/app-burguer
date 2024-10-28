import React, { useEffect } from 'react'
import burguer1 from '../../images/burguer1.jpg'
import burguer2 from '../../images/burguer2.jpg'
import burguer from '/images/burguer.jpg'
import Topo from '../../components/Topo'
import Component from './style'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import {Slider, SliderProps, Slide} from '../../components/Slider'
import { MdFastfood } from "react-icons/md";
import './style';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore'
import { db } from '../../firebaseConnection'
import data from '../../data.json'
import { runTransaction } from "firebase/firestore";


type Props = {
}
const index = (props: Props) => {
 const [burguers, setBurguers] = React.useState<any[]>([])

 
  const settings:SliderProps = {
    spaceBetween:50,
    slidesPerView: 2,
    navigation:true,
  }



  async function createBurguer(burguerData:any) {
    try{
      const produtosRef = doc(db, 'produtos', burguerData.id);  // Definindo o id manualmente
      const docSnapshot = await getDoc(produtosRef);
      if (!docSnapshot.exists()) {
        await setDoc(produtosRef, burguerData);
        console.log('burguer criado com sucesso!', burguerData.id);
      } else {
        console.log('burguer já existe');
      }
  
    }catch(err){
      console.log("erro ao adicionar hamburguer",err)
    }
  }
  useEffect(() => {
     data.forEach(async (burguer) => {
    await createBurguer(burguer);  // Chamada da função
  });
  }, [])
 

  
  return (
    <Component>
      <Topo/>
      <Menu/>
      <div  className='conteudo-topo'>
      <img src={burguer}/>
      <h2><h1>Saboreie</h1> Perfeição em cada mordida!</h2>
      </div>
      <div className='conteudo-principal'>
        <h3>Conheça nossos <h1>queridinhos</h1> </h3>

        <Slider settings={settings}>
          {data.map((item, idx) => (
              <Slide key={idx}>
                <Link to={`/detalhes/${item.id}`} ><img src={item.image}/></Link>
              </Slide>
          ))}
        </Slider>
        
        <i ><MdFastfood size={35}/></i>
        <p>Nossos burguers tem a opção de combos</p>
        <button className='btn-combo'><Link to={'/combos'} >Conheça</Link></button>
      </div>

      <Rodape/>
    </Component>
  )
}

export default index