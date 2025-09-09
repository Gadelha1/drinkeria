import { Modal } from 'antd';

/**
 * Modal
 * @param {boolean} isOpen - Controla se o modal está aberto
 * @param {function} onClose - Função executada ao fechar o modal
 * @param {string} title - Título exibido no cabeçalho do modal
 * @param {ReactNode} children - Conteúdo dinâmico renderizado dentro do modal
 * @param {number} width 
 */
const CustomModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  width = 450,
   
}) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={onClose}      
      footer={null}           
      width={width}           
      centered                
      destroyOnHidden={true}       
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
