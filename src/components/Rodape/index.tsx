import React from 'react'
import ContainerRodape from './style'
import logo from '../../images/logo.png'
type Props = {}

const index = (props: Props) => {
  return (
    <ContainerRodape>
      <img src={logo}/>
      <div className='info'>
        <h1>Endereço</h1>
        <p>Rua dos felizardos
        quadra 121, Goiânia-GO</p>
      </div>

      <div className='info'>
        <h1>Horário</h1>
        <p>De quarta á domingo das 18:00 ás 22:00 hrs</p>
      </div>
      
      <div className='info'>
      <h1>Contato</h1>
      <p>(62) 9 9999-9999</p>
      </div>
      <div className='ContainerDireitos'>
      <h4> © 2022 Burguer. Todos os direitos reservados.</h4>
      </div>
     
    </ContainerRodape>

  )
}

export default index