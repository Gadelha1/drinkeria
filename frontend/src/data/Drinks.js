export const caicaraDrinks = [
  {
    title: "Caiçara OG",
    description: "Drink inspirado na OG Kush, refrescante e herbal.",
    price: "R$ 18,00",
    modalType: "caicara",
    ingredientes: ["Cachaça", "Limão", "Açúcar", "Gelo"]
  },
  {
    title: "Caiçara Lemon",
    description: "Notas cítricas e aroma marcante.",
    price: "R$ 19,00",
    modalType: "caicara",
    ingredientes: ["Vodka", "Limão Siciliano", "Açúcar", "Gelo"]
  },
  
];

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
    }
};
export const personalizaveis = [drinkTypes.caipirinha, drinkTypes.caicara, drinkTypes.drinksProntos];