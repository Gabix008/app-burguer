import React, { useEffect } from 'react'
import Component from './style'
import Topo from '../../components/Topo'
import fanta2 from '/images/fanta2.png'
import Menu from '../../components/Menu'
import { LuTrash2 } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { TbShoppingCartX } from "react-icons/tb";
import {Fab} from '@mui/material'
import BasicModal from '../../components/Modal'


const index = () => {
  const [burguers, setBurguers] = React.useState<any[]>([])
  const [combo, setCombo] = React.useState<any[]>([])
  const [quantidade, setQuantidade] = React.useState(1)
 
  useEffect(()=> {
    const carrinho = localStorage.getItem('@burguer');

    setBurguers(JSON.parse(carrinho || '[]'))
  },[])


  function excluir(id: any){
    let filtroBurguer = burguers.filter((item) => {
      return (item.id !== id)
    })
    setBurguers(filtroBurguer)
    localStorage.setItem('@burguer', JSON.stringify(filtroBurguer))
    toast.success("Produto excluido do carrinho")
  }

 const handlePlus = (id: any) => {
  console.log(quantidade)
  const update = burguers.map((item) => {
    console.log(item.quantidade)
    if(item.id == id ){
      return {...item, quantidade: parseFloat (item.quantidade) + 1 }
    }
    return item
  })
  setBurguers(update)
  localStorage.setItem('@burguer', JSON.stringify(update))
  }

  const handleMinus = (id:any) => {
    const updateMinus = burguers.map((item) => {
      console.log(item.quantidade)
      if(item.id == id && item.quantidade > 1){
        return {...item, quantidade: parseFloat (item.quantidade) - 1 }
      }
      return item
    })
    setBurguers(updateMinus)
    localStorage.setItem('@burguer', JSON.stringify(updateMinus))
  }
  const calcularValorFinal = () => {
    let total = 0;
    burguers.map((item) => {
      total += parseFloat(item.quantidade) * parseFloat(item.valor)
    })
    return total.toFixed(2)
  }
  return (
    <Component>
      <Topo/>
      <Menu/>
      <h1>Pedidos</h1>

      
      {burguers.map((item) => {
        return(
          
          <div className='box'> 
          <button className='btn-trash'><LuTrash2 className='trash' onClick={() => excluir(item.id)} size={22}>Excluir</LuTrash2></button>
          <div className='image-text-wrapper' >
          <img src={item.image} alt="" />
            <div className='text-content'>
            
            <h4>{item.nome}</h4> 
            <p>{item.descricao}</p>
            {item.observacoes && <h5>Observações: </h5>}
            <p>{item.observacoes}</p>

            <div className='quantity-selector'>
            <button  className='btn' onClick={() => handleMinus(item.id)}
            >-</button>
            <p className='quantidade' >{item.quantidade}</p>
            <button  className='btn' onClick={() => handlePlus(item.id)}>+</button>
            </div>
            
            <h2>R${(parseFloat(item.valor) * parseFloat(item.quantidade)).toFixed(2)}</h2>
            </div>
          </div >
        </div>
        
        )
      })}
      

      {burguers.length > 0 ? (
        <div>
        <h3>Valor total </h3> 
         <h3>R$ {calcularValorFinal()}</h3> 
         {/* <button className='btn-finalizar'>Finalizar pedido</button> */}
         <BasicModal burguer={burguers} total={calcularValorFinal()}  />
        </div>
      ):(
         <h1 className='sem-pedidos' >Sem pedidos...</h1>

      )}
    </Component>
  )
}

export default index