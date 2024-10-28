import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { height } from '@mui/system';
import ContainerModal from './style';
import { Checkbox } from '@mui/material';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaPix } from "react-icons/fa6";
import { useEffect } from 'react';
import { toast } from 'react-toastify';



interface Burguer {
  total: string
  burguer: any[]
}

export default function BasicModal({burguer, total}: Burguer) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [endereco, setEndereco] = React.useState(''); // Estado para o endereço
  const [bairro, setBairro] = React.useState(''); // Estado para o bairro
  const [pagamento, setPagamento] = React.useState(''); 
  const [burguers, setBurguers] = React.useState<Burguer[]>([]);

  useEffect(()=> {
    const carrinho = localStorage.getItem('@burguer');

    setBurguers(JSON.parse(carrinho || '[]'))
  },[burguer])

 
    const phoneNumber = '5562991082454'; // Número de telefone
    const generateMessage = () => {
      const items = burguer.map(item => `${item.quantidade}x ${item.nome}`).join('\n');
      return `Olá, estou finalizando o pedido:\n\n ${items} \n\n Total: ${total}\n\nEndereço: ${endereco} \n\n Bairro: ${bairro}\n\nForma de pagamento: ${pagamento}`;
    };



    const handleClick = () => {
      const message = generateMessage();
        const encodedMessage = encodeURIComponent(message); 

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        if(endereco == '' || bairro == '' || pagamento == ''){
          toast.error("Preencha todos os campos")
          return
        }

          window.open(whatsappUrl, '_blank'); 
          handleClose();
          localStorage.removeItem('@burguer');
          toast.success("Obrigado pelo pedido")
        
    };

  return (
    <div>
      <Button onClick={handleOpen} className='btn-finalizar'>Finalizar pedido</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ContainerModal >
          <h3 className="modal-title">Finalizar o pedido</h3>
          <h4>Valor total</h4>
          <h3>R${total}</h3>
          <h4>Entrega</h4>

          <input type='text' placeholder='Logradouro' className='input' onChange={(e) => setEndereco(e.target.value)} />
          <input type='text' placeholder='Bairro' className='input' onChange={(e) => setBairro(e.target.value)} />
       

          <h4>Forma de pagamento</h4>
          <div className="pagamentos">
            <label htmlFor="">
            <input type='radio' name='pagamento' value='dinheiro' onChange={(e) => setPagamento(e.target.value)}/> <FaRegMoneyBillAlt color='#03AE2F' size={20} className='icon'  />  Dinheiro
            </label>
            <label htmlFor="">
            <input type='radio' name='pagamento' value='cartao' onChange={(e) => setPagamento(e.target.value)} /> <FaRegCreditCard  size={20} color='#1076BA' className='icon' />Cartão
            </label>
            <label htmlFor="">
            <input type='radio' name='pagamento' value='pix' onChange={(e) => setPagamento(e.target.value)} /><FaPix  size={20} color='#01BEAE' className='icon' /> Pix
            </label> 
          </div>
        
          
          <button onClick={handleClick}>Finalizar</button>
        </ContainerModal>
      </Modal>
    </div>
  );
}
