import React from 'react'
import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import Component from './style'
import burguer2 from '../../images/burguer2.jpg'
import burguer1 from '../../images/burguer1.jpg'
import banner3 from '../../images/banner3.png'
import Banner4 from '../../images/Banner4.png'
import Banner5 from '../../images/Banner5.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
type Props = {}

const index = (props: Props) => {


  const data = [
    {
      nome:'Combo  Double Empire',
      descricao:'Um suculento patty de carne bovina, coberto com uma fatia generosa de queijo cheddar, alface fresca, tomate maduro e um molho especial que traz um toque de sabor inigualável. ',
      acompanhamentos: ' Acompanha Batatas fritas e uma coca-cola lata ',
      image:burguer2
    },
    {
      nome:'Combo  Super delicia',
      descricao:'Um suculento patty de carne bovina, coberto com uma fatia generosa de queijo cheddar, alface fresca, tomate maduro e um molho especial que traz um toque de sabor inigualável. ',
      acompanhamentos: ' Acompanha Chips e um guaraná lata ',
      image:burguer1
    },
    {
      nome:'Combo  Sabor especial',
      descricao:'Um suculento patty de carne bovina, coberto com uma fatia generosa de queijo cheddar, alface fresca, tomate maduro e um molho especial que traz um toque de sabor inigualável. ',
      acompanhamentos: ' Acompanha Chips e um guaraná lata ',
      image:burguer2
    },
    {
      nome:'Combo  Sabor especial',
      descricao:'Um suculento patty de carne bovina, coberto com uma fatia generosa de queijo cheddar, alface fresca, tomate maduro e um molho especial que traz um toque de sabor inigualável. ',
      acompanhamentos: ' Acompanha Chips e um guaraná lata ',
      image:burguer1
    }
  ]
  return (
    <Component>
      <Topo/>
      <Menu/>
      <h1>Combos</h1>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={banner3}></img></SwiperSlide>
        {/* <SwiperSlide><img src={Banner4}></img></SwiperSlide>
        <SwiperSlide><img src={Banner5}></img></SwiperSlide> */}
      </Swiper>
      <h1>Peça agora!</h1>
      <div className='container'>
      {data.map((item, index) => (
        <div className='box'> 
          <div className='image-text-wrapper' key={index}>
            <img src={item.image}/>
            <div className='text-content' key={index}>
            <h4> {item.nome}</h4>
            <p> {item.descricao}<span>{item.acompanhamentos} </span></p>
            <button className='btn-burguer'><Link to={'/pedido'} >Fazer pedido</Link></button>
            </div>
          </div >
        </div>
      ))}
      </div>
    
    </Component>
  )
}

export default index