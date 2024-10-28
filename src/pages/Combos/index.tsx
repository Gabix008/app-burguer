import React, { useEffect, useState } from 'react'
import Topo from '../../components/Topo'
import Menu from '../../components/Menu'
import Component from './style'
import burguer2 from '/images/burguer2.jpg'
import burguer1 from '/images/burguer1.jpg'
import banner3 from '/images/banner3.png'
import Banner4 from '/images/Banner4.png'
import Banner5 from '/images/Banner5.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import comboData from '../../comboData.json'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebaseConnection'
import { toast } from 'react-toastify'
type Burguer = {
    id: string,
    valor:string,
    image:string,
    descricao:string,
    nome:string,
    observacoes: string
  }


const index = () => {
  const [burguer, setBurguer] = useState<Burguer | null>(null);

  async function createBurguer(burguerData:any) {
    try{
      const produtosRef = doc(db, 'produtos', burguerData.id);  // Definindo o id manualmente
      const docSnapshot = await getDoc(produtosRef);
      if (!docSnapshot.exists()) {
        await setDoc(produtosRef, burguerData);
        console.log('Combo burguer criado com sucesso!', burguerData.id);
      } else {
        console.log('burguer já existe');
      }
  
    }catch(err){
      console.log("erro ao adicionar hamburguer",err)
    }
  }

  useEffect(() => {
     comboData.forEach(async (comboBurguer) => {
    await createBurguer(comboBurguer); 
  });
  }, [])

  function salvar(){
    const combo = localStorage.getItem('@comboburguer');

    let produtosSalvos = JSON.parse(combo || '[]');
    const hasBurguer = produtosSalvos.some((produtosSalvos: { id: string }) => produtosSalvos.id === burguer?.id);
    if(hasBurguer){
      toast.error("O hamburguer já está no carrinho!")
      return
    }
    produtosSalvos.push(burguer);
    
    localStorage.setItem('@comboburguer', JSON.stringify(produtosSalvos));
    toast.success("Hamburguer adicionado ao carrinho")
  
  }
 
  
  return (
    <Component>
      <Topo/>
      <Menu/>
      <h1>Combos</h1>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src={banner3} className='banner'></img></SwiperSlide>
        
      </Swiper>
      {/* <h1>Peça agora!</h1> */}
      <div className='container'>
      {comboData.map((item, index) => (
        <div className='box'> 
          <div className='image-text-wrapper' key={index}>
            <img src={item.image}/>
            <div className='text-content' key={index}>
            <h4> {item.nome}</h4>
            <p> {item.descricao}<span>{item.acompanhamentos} </span></p>
            <Link to={`/detalhes/${item.id}`} className='link'><button className='btn-burguer' onClick={salvar}>Fazer pedido</button></Link>
            </div>
          </div >
        </div>
      ))}
      </div>
    
    </Component>
  )
}

export default index