import { useState } from "react";
import Header from "../header/Header";
import MainContent from "./MainContent";
import { tabsData } from "../../data/TabsData";
import ModalManager from "../modais/ModalManager";

function MainLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [activeTab, setActiveTab] = useState('drinks');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  
  const openModal = (modalType, data) => {
    setModalContent({ modalType, data, title: data.title });
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
      
      <ModalManager
        isOpen={isModalOpen}
        content={modalContent}
        onClose={closeModal}
      />
    </div>
  );
}

export default MainLayout;