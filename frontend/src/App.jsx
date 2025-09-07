import { useState } from 'react';
import Header from './components/header/header';
import MainContent from './components/layout/MainContent';
import { Caipirinha, DrinkPronto, CustomModal } from './components/modais/modaisIndex';
import { tabsData } from './data/tabsData';
import './styles/index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeTab, setActiveTab] = useState('drinks');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

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

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="app">
      <Header 
        activeTab={activeTab}
        onChange={handleTabChange}
        tabsData={tabsData}
      />
      
      <MainContent 
        activeTab={activeTab}
        onOpenModal={openModal}
      />

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent?.title}
      >
        {modalContent?.content}
      </CustomModal>
    </div>
  );
}

export default App;
