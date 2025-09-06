import { useState } from 'react';
import DrinkCard from './components/card/drinkCard'
import CaipirinhaSel from './components/modais/caipirinha/caipirinhaModal';
import ReadyDrinkSel from './components/modais/drinks/drinksModal';
import CustomModal from './components/modais/custom/customModal';
import { drinkTypes } from './data/drinks';
import './styles/index.css';

function App() {
  // Estado para controlar abertura/fechamento do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para armazenar dados do modal (conteúdo + título)
  const [modalContent, setModalContent] = useState(null);

  /**
   * Função para abrir modal com conteúdo específico
   * @param {string} modalType - Tipo do modal ('customizable' ou 'simple')
   * @param {object} data - Dados do drink selecionado
   */
  const openModal = (modalType, data) => {
    let content;
    
    // Switch para decidir qual componente renderizar baseado no tipo
    switch(modalType) {
      case 'customizable':
        content = <CaipirinhaSel data={data} />;
        break;
      case 'simple':
        content = <ReadyDrinkSel data={data} />;
        break;
      default:
        content = <div>Conteúdo não encontrado</div>;
    }

    setModalContent({ content, title: data.title });
    setIsModalOpen(true);
  };

  /**
   * Função para fechar o modal e limpar o conteúdo
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="app">
      <div className="app__container">
        <h1>Drinkeria - Cardápio Digital</h1>
        
        <div className='drinks-grid'>
          {/* Card de Caipirinhas (customizável) */}
          <DrinkCard 
            data={drinkTypes.caipirinha} 
            onClick={openModal} 
          />
          
          {/* Card de Drinks Prontos (simples) */}
          <DrinkCard 
            data={drinkTypes.ready} 
            onClick={openModal} 
          />
        </div>

        {/* Modal reutilizável que renderiza conteúdo dinâmico */}
        <CustomModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent?.title}
        >
          {modalContent?.content}
        </CustomModal>
        
      </div>
    </div>
  )
}

export default App
