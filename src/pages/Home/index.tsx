import React, { useEffect } from 'react'
import burguer1 from '../../images/burguer1.jpg'
import burguer2 from '../../images/burguer2.jpg'
import burguer from '../../images/burguer.jpg'
import Topo from '../../components/Topo'
import Component from './style'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import {Slider, SliderProps, Slide} from '../../components/Slider'
import { MdFastfood } from "react-icons/md";
import './style';
import { Link } from 'react-router-dom'
import axios from 'axios'

const data = [
  {
    id:1,
    image:burguer1,
    valor:'10.00',
  },
  {
    id:2,
    image:burguer2,
    valor:'10.00',
  },
  {
    id:3,
    image:burguer,
    valor:'10.00',
  },
  {
    id:4,
    image:burguer1,
    valor:'10.00',
  }
]

type Props = {
}
const index = (props: Props) => {


 
  const settings:SliderProps = {
    spaceBetween:50,
    slidesPerView: 2,
    navigation:true,
  }

  

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