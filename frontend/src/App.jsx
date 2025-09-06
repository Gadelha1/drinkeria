import { useState } from 'react';
import DrinkCard from './components/card/drinkCard'
import { Caipirinha, DrinkPronto, CustomModal } from './components/modais/modaisIndex';
import { drinkTypes } from './data/drinks';
import './styles/index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [modalContent, setModalContent] = useState(null);

  /**
   * @param {string} modalType - Tipo do modal ('customizable' ou 'simple')
   * @param {object} data - Dados do drink selecionado
   */
  const openModal = (modalType, data) => {
    
    let content;
    
    switch(modalType) {
      case 'customizable':
        content = <Caipirinha data={data} />;
        break;
      case 'simple':
        content = <DrinkPronto data={data} />;
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
            data={drinkTypes.caicara} 
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
