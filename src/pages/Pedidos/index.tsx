import React from 'react'
import Component from './style'
import Topo from '../../components/Topo'
import fanta2 from '../../images/fanta2.png'
import Menu from '../../components/Menu'
import { Link } from 'react-router-dom'

type Props = {}

const index = (props: Props) => {
  return (
    <Component>
      <Topo/>
      <Menu/>
      <h1>Pedidos</h1>
      <div className='box'> 
          <div className='image-text-wrapper' >
            <img src={fanta2}/>
            <div className='text-content'>
            <h4>Fanta uva lata</h4>
            <hr/>
            <h3>Quantidade: 1 </h3>
            
            <h3>Detalhes: 350ml </h3>
            <h2>R$5,00</h2>
            </div>
          </div >
        </div>

        <div className='box'> 
          <div className='image-text-wrapper' >
            <img src={fanta2}/>
            <div className='text-content'>
            <h4>Fanta uva lata</h4>
            <hr/>
            <h3>Quantidade: 1 </h3>
            
            <h3>Detalhes: 350ml </h3>
            <h2>R$5,00</h2>

            </div>
          </div >
        </div>

        <div className='box'> 
          <div className='image-text-wrapper' >
            <img src={fanta2}/>
            <div className='text-content'>
            <h4>Fanta uva lata</h4>
            <hr/>
            <h3>Quantidade: 1 </h3>
            
            <h3>Detalhes: 350ml </h3>
            <h2>R$5,00</h2>

            </div>
          </div >
          <button className='btn-burguer'><Link to={'/pedido'} >Finalizar pedido</Link></button>
        </div>
    </Component>
  )
}

export default index