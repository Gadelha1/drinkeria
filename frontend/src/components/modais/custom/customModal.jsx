import { Modal } from 'antd';

/**
 * Modal reutilizável para todo o projeto
 * @param {boolean} isOpen - Controla se o modal está aberto
 * @param {function} onClose - Função executada ao fechar o modal
 * @param {string} title - Título exibido no cabeçalho do modal
 * @param {ReactNode} children - Conteúdo dinâmico renderizado dentro do modal
 * @param {number} width - Largura do modal (padrão: 600px)
 */
const CustomModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  width = 600 
}) => {
  return (
    <Modal
      title={title}
      open={isOpen}           // Prop do Ant Design para controlar visibilidade
      onCancel={onClose}      // Função executada ao clicar no X ou ESC
      footer={null}           // Remove botões padrão (OK/Cancel)
      width={width}           // Largura personalizada
      centered                // Centraliza o modal na tela
      destroyOnClose         // Remove o conteúdo do DOM quando fechado
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
