import React, { useEffect } from 'react'
import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import banner1 from '/images/banner1.png'
import banner2 from '/images/banner2.png'
import burguer from '/images/burguer.jpg'
import Component from './style'
import burguerTData from '../../burguerTData.json'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import Rodape from '../../components/Rodape'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConnection'

type Props = {}

const index = (props: Props) => {

  
  async function createBurguer(burguerData:any) {
    try{
      const produtosRef = doc(db, 'produtos', burguerData.id);  // Definindo o id manualmente
      const docSnapshot = await getDoc(produtosRef);
      if (!docSnapshot.exists()) {
        await setDoc(produtosRef, burguerData);
        console.log('Combo burguer criado com sucesso!', burguerData.id);
      } else {
        console.log('burguer já existe');
      }
  
    }catch(err){
      console.log("erro ao adicionar hamburguer",err)
    }
  }

  useEffect(() => {
    burguerTData.forEach(async (burguerT) => {
    await createBurguer(burguerT);  
  });
  }, [])
  return (
    <Component>

      <Topo/>
      <Menu/>
      <h1>Burguer tradicional</h1>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={banner1}></img></SwiperSlide>
        <SwiperSlide><img src={banner2}></img></SwiperSlide>
      </Swiper>
      <div className='container'>
      {burguerTData.map((item, index) => (
      <div className='box'> 
          <div className='image-text-wrapper' >
            <img src={item.image}/>
            <div className='text-content'>
            <h4>{item.nome}</h4>
            <p> {item.descricao}<span>{item.acompanhamentos}</span></p>
            <button className='btn-burguer'><Link to={`/detalhes/${item.id}`} >Fazer pedido</Link></button>
            </div>
          </div >
        </div>

        ))}

      </div>
  </Component>
  )
}

export default index