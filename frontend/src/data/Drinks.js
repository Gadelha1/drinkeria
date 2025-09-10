export const drinkTypes = {
    caipirinha: {
        title: "Caipirinha",
        description: "Monte sua caipirinha do seu jeito! Escolha a base, frutas e adicionais.",
        price: "R$ 15,00",
        modalType: "customizable"
    },
    drinksProntos: {
        title: "Drinks Prontos",
        description: "Drinks clássicos e especiais, prontos para servir.",
        price: "R$ 12,00",
        modalType: "simple"
    },
    caicara: {
        title: "Caiçara",
        description: "Drinks Caiçara inspirados nas famosas espécies de cannabis.",
        price: "R$ 18,00",
        modalType: "caicara",
        ingredientes: ["Cachaça", "Limão", "Açúcar", "Gelo"]
    }
};
export const personalizaveis = [drinkTypes.caipirinha, drinkTypes.caicara, drinkTypes.drinksProntos];