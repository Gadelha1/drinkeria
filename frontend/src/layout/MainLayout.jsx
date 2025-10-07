import Header from "./components/header/Header";
import MainContent from "./components/content/MainContent";
import ModalManager from "./components/modais/ModalManager";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../store/ModalSlice";
import { Layout } from "antd";
import Tabs from "./components/tabs/Tabs";
import tabsData from "./components/tabs/data/TabsData";

function MainLayout() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const modalContent = useSelector((state) => state.modal.content);
  const activeTab = useSelector((state) => state.tab.activeTab);

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
      <Layout>
        <Header />
        <Tabs tabsData={tabsData} />

      <MainContent 
      activeTab={activeTab} 
      onOpenModal={openModalHandler} />

      <ModalManager 
      isOpen={isModalOpen} 
      content={modalContent} 
      onClose={closeModalHandler} />
      </Layout>
  );
}

export default MainLayout;
