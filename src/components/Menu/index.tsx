import React from 'react'
import { Link } from 'react-router-dom'
import ComponentMenu from './style'
import logo from '../../images/logo.png'
type Props = {}


const Menu = (props: Props) => {
  return (
    <div>
    <ComponentMenu>
      <div className='imagem'>
      {/* <img src={logo}></img> */}
      </div>

      <div className='link'>
      <Link to={'/'}>Home</Link>
      <Link to={'/combos'}>Combos</Link>
      <Link to={'/tradicionais'}>Hamburgues tradicionais</Link>
      <Link to={'/bebidas'}>Bebidas</Link>
      </div>
      <button className='btn-pedido'><Link to={'/pedido'} >Fazer pedido</Link></button>
      
    </ComponentMenu>
    </div>
  )
}

export default Menu