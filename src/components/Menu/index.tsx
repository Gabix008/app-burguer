import React from 'react'
import { Link } from 'react-router-dom'
import ComponentMenu from './style'
type Props = {}


const Menu = (props: Props) => {
  return (
    <div>
    <ComponentMenu>
      <div className='imagem'>
      </div>

      <div className='link'>
      <Link to={'/'}>Home</Link>
      <Link to={'/combos'}>Combos</Link>
      <Link to={'/tradicionais'}>Hamburgues tradicionais</Link>
      <Link to={'/bebidas'}>Bebidas</Link>
      </div>
      <button className='btn-pedido'><Link to={'/pedido'} >Pedidos</Link></button>
      
    </ComponentMenu>
    </div>
  )
}

export default Menu