import React, { useEffect, useState } from 'react'
import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import { collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebaseConnection'
import { useParams, useNavigate, Link } from 'react-router-dom'
import data from '../../data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Component from './style'
type Burguer = {
  id: string,
  valor:string,
  image:string,
  descricao:string,
  nome:string,
  observacoes: string,
  quantidade: string
}


const index = () => {
  const {id} = useParams<{ id: string }>()
  const [burguer, setBurguer] = useState<Burguer | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantidade, setQuantidade] = useState(1);
  const navigate = useNavigate();

  useEffect(()=> {
    async function loadBurguer() {
      try{
        console.log(id)
        if(id){
          const burguerRef = doc(db, 'produtos', id);
          
          const produtosSnap = await getDoc(burguerRef);
          console.log("produtosSnap:", produtosSnap.id)
          
          console.log("produtosSnap:", produtosSnap.exists())// Verifica se o documento existe
          if(produtosSnap.exists()) { 
              setBurguer(produtosSnap.data() as Burguer); 
              setLoading(false)
          } else { console.log("O documento não existe") }
        } else { console.log("O ID não existe") } }
          catch(error) { 
            console.log(error) 
          }
    }
    loadBurguer()
  },[navigate, id])


function salvar(){
  const carrinho = localStorage.getItem('@burguer');
  let produtosSalvos = JSON.parse(carrinho || '[]');
  const produtoComQuantidade = { ...burguer, quantidade: String(quantidade) };

  const hasBurguer = produtosSalvos.some((item: { id: string }) => item.id === produtoComQuantidade?.id);

  if (hasBurguer) {
    toast.error("O hamburguer já está no carrinho!")
    
    return
  }

  produtosSalvos.push(produtoComQuantidade);
 
  
  localStorage.setItem('@burguer', JSON.stringify(produtosSalvos));
  toast.success("Produto adicionado ao carrinho")
}

const handlePlus = () => {
  setQuantidade((prevQuantidade) => prevQuantidade + 1); // Incrementa a quantidade
};

const handleMinus = () => {
  if (quantidade > 1) {
    setQuantidade((prevQuantidade) => prevQuantidade - 1); // Decrementa a quantidade
  }
};
  if(loading){
    return <p>Carregando...</p>
  }

  if(!burguer){
    return <p>Burguer não encontrado</p>
  }
 

  return (
    <Component>
      <Topo/>
      <Menu />
      <div className='detail-burguer'>
      <img src={burguer.image} width={590} height={400}/> 
      <h4>{burguer.nome}</h4>
      <p>{burguer.descricao}</p>
      <h1>R$ {burguer.valor} </h1>

      <div className='quantity-selector'>
      <button className='btn' onClick={handleMinus}>-</button>
      <p className='quantidade'>{quantidade}</p>
      <button className='btn' onClick={handlePlus}>+</button>
      </div>


    <label htmlFor="">Observação: </label>
      <input type='textearea' placeholder='Observação'onChange={(e) => setBurguer({...burguer, observacoes: e.target.value})} />
      <button className='btn-burguer' onClick={salvar}>Fazer pedido</button>
      </div>
    </Component>
  )
}

export default index