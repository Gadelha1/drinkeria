import { Caicara, CustomModal } from "./ModaisIndex";
import { Caipirinha, DrinkPronto } from "./ModaisIndex";


function ModalManager({ isOpen, content, onClose }) {
    if (!content) return null;

    let modalContent;
    switch (content.modalType) {
        case 'customizable':
            modalContent = <Caipirinha 
            data={content.data} />;
            break;
        case 'caicara':
            modalContent = <Caicara 
            data={content.data} />;
            break;
        case 'simple':
            modalContent = <DrinkPronto 
                data={content.data} />;
            break;
        default:
            modalContent = <div> Conteúdo não encontrado</div>
    }

    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            title={content.title}
        >
            {modalContent}
        </CustomModal>
    );
}

export default ModalManager;