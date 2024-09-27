import React from 'react'
import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import burguer from '../../images/burguer.jpg'
import Component from './style'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import Rodape from '../../components/Rodape'

type Props = {}

const index = (props: Props) => {
  // const swiper = new Swiper('.swiper', {
  //   pagination: {
  //     el: '.swiper-pagination',
	// 		clickable: true,
  //       renderBullet: function (index, className) {
  //         return '<span class="' + className + '">' + (menu[index]) + '</span>';
  //       },
  //   },
  //   navigation: {
  //     nav : 
  //   },
  
  // });

  const data = [
    {
      nome:'  Double Empire',
      descricao:'Um suculento patty de carne bovina, coberto com uma fatia generosa de queijo cheddar, alface fresca, tomate maduro e um molho especial que traz um toque de sabor inigualável. ',
      acompanhamentos: ' Acompanha Batatas fritas e uma coca-cola lata ',
      image:burguer
    },
    {
      nome:'  Super delicia',
      descricao:'Um suculento patty de carne bovina, coberto com uma fatia generosa de queijo cheddar, alface fresca, tomate maduro e um molho especial que traz um toque de sabor inigualável. ',
      acompanhamentos: ' Acompanha Chips e um guaraná lata ',
      image:burguer
    },
    {
      nome:'  Sabor especial',
      descricao:'Um suculento patty de carne bovina, coberto com uma fatia generosa de queijo cheddar, alface fresca, tomate maduro e um molho especial que traz um toque de sabor inigualável. ',
      acompanhamentos: ' Acompanha Chips e um guaraná lata ',
      image:burguer
    },
    {
      nome:'  Sabor especial',
      descricao:'Um suculento patty de carne bovina, coberto com uma fatia generosa de queijo cheddar, alface fresca, tomate maduro e um molho especial que traz um toque de sabor inigualável. ',
      acompanhamentos: ' Acompanha Chips e um guaraná lata ',
      image:burguer
    }
  ]

  return (
    <Component>

      <Topo/>
      <Menu/>
      <h1>Burguer tradicional</h1>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={banner1}></img></SwiperSlide>
        <SwiperSlide><img src={banner2}></img></SwiperSlide>
      </Swiper>
      <h1>Peça agora!</h1>
      <div className='container'>
      {data.map((item, index) => (
      <div className='box'> 
          <div className='image-text-wrapper' >
            <img src={burguer}/>
            <div className='text-content'>
            <h4>{item.nome}</h4>
            <p> {item.descricao}<span>{item.acompanhamentos}</span></p>
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