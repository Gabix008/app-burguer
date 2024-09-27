import React from 'react'
import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import cocalata from '../../images/cocalata.png'
import coca2l from '../../images/coca2l.png'
import GuaranaLata from '../../images/GuaranaLata.png'
import fanta2 from '../../images/fanta2.png'
import Component from './style'
import { Link } from 'react-router-dom'
type Props = {}

const index = (props: Props) => {
  const data = [
    {
      nome:'Coca-cola lata',
      preco:'R$7.00',
      image:cocalata
    },
    {
      nome:'Coca-cola 2 litros',
      preco:'R$15.00',
      image:coca2l
    },
    {
      nome:'Guaraná lata',
      preco:'R$5.00',
      image:GuaranaLata
    },
    {
      nome:'Fanta uva lata',
      preco:'R$6.00',
      image:fanta2
    }
  ]
  return (
    <div>
      <Component>
      <Topo/>
      <Menu/>
      <h1>Bebidas</h1>

      {data.map((item, index) => (
        <div className='box'> 
        <div className='image-text-wrapper' >
          <img src={item.image}/>
          <div className='text-content'>
          <h4>{item.nome}</h4>
          <p>{item.preco}</p>
          <button className='btn-burguer'><Link to={'/pedido'} >Fazer pedido</Link></button>
          </div>
        </div >
      </div>
      ))}
      
      </Component>
    </div>
  )
}

export default index