import Header from "../header/Header";
import MainContent from "./MainContent";
import { tabsData } from "../../data/TabsData";
import ModalManager from "../modais/ModalManager";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../store/TabSlice";
import { closeModal, openModal } from "../../store/ModalSlice";

function MainLayout() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const modalContent = useSelector((state) => state.modal.content);
  const activeTab = useSelector((state) => state.tab.activeTab);

  const handleTabChange = (key) => {
    dispatch(setActiveTab(key));
  };

  const openModalHandler = (modalType, data) => {
    dispatch(openModal({ 
        modalType, 
        data, 
        title: data.title 
    }));
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div className="app">
      <Header 
      activeTab={activeTab} 
      onChange={handleTabChange} 
      tabsData={tabsData} />

      <MainContent 
      activeTab={activeTab} 
      onOpenModal={openModalHandler} />

      <ModalManager 
      isOpen={isModalOpen} 
      content={modalContent} 
      onClose={closeModalHandler} />
      
    </div>
  );
}

export default MainLayout;
