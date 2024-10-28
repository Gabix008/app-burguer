import React, { useEffect, useState } from 'react'
import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import cocalata from '/images/cocalata.png'
import coca2l from '/images/coca2l.png'
import GuaranaLata from '/images/GuaranaLata.png'
import fanta2 from '/images/fanta2.png'
import bebidasData from '../../bebidasData.json'
import Component from './style'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConnection'
import { toast } from 'react-toastify'
type Bebida = {
  id: string,
  nome: string,
  valor:string,
  image:string,
  quantidade: string
  
}

const index = () => {
  const {id} = useParams<{ id: string }>()
  const [bebida, setBebida] = useState<Bebida | null>(null);
  async function createDrinks(drinkData:any) {
    try{
      const produtosRef = doc(db, 'produtos', drinkData.id);  // Definindo o id manualmente
      const docSnapshot = await getDoc(produtosRef);
      if (!docSnapshot.exists()) {
        await setDoc(produtosRef, drinkData);
        console.log('Produto criado com sucesso!', drinkData.id);
      } else {
        console.log('Produto já existe');
      }
  
    }catch(err){
      console.log("erro ao adicionar o produto",err)
    }
  }
  useEffect(() => {
    bebidasData.forEach(async (bebida) => {
    await createDrinks(bebida);  // Chamada da função
  });
  }, [])

 

 
  
  
  return (
    <div>
      <Component>
      <Topo/>
      <Menu/>
      <h1>Bebidas</h1>

      {bebidasData.map((item, index) => (
        <div className='box'> 
        <div className='image-text-wrapper' >
          <img src={item.image}/>
          <div className='text-content'>
          <h4>{item.nome}</h4>
          <p> R$ {item.valor}</p>
          <button className='btn-burguer'><Link to={`/detalhes/${item.id}`} >Fazer pedido</Link></button>
          </div>
        </div >
      </div>
      ))}
      
      </Component>
    </div>
  )
}

export default index