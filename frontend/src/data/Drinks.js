import lemonImg from '../assets/drinks/lemon.jpeg';
import gorilaGlueImg from '../assets/drinks/gorilaGlue.jpeg';
import gold24k from '../assets/drinks/24k.jpeg';

export const caicaraDrinks = [
  {
    title: "Caiçara OG",
    description: "Drink inspirado na OG Kush, refrescante e herbal.",
    price: "R$ 20,00",
    modalType: "caicara",
    ingredientes: ["Cachaça", "Limão", "Açúcar", "Gelo"],
    img: gorilaGlueImg
  },
  {
    title: "Caiçara Lemon",
    description: "Notas cítricas e aroma marcante.",
    price: "R$ 20,00",
    modalType: "caicara",
    ingredientes: ["Vodka", "Limão Siciliano", "Açúcar", "Gelo"],
    img: lemonImg
  },
  {
    title: "Caiçara Pineaple Express",
    description: "Potência e sabor intenso.",
    price: "R$ 20,00",
    modalType: "caicara",
    ingredientes: ["Cachaça", "Hortelã", "Abacaxi", "Gelo"],
    img: gold24k
  },
  
];

export const caipirinhas = [
  {
    title: "Caipirinha Clássica",
    description: "Cachaça, limão, açúcar e gelo.",
    price: "R$ 20,00",
    modalType: "simple"
  },
  {
    title: "Caipirinha de Morango",
    description: "Cachaça, morango, açúcar e gelo.",
    price: "R$ 20,00",
    modalType: "simple"
  },
  {
    title: "Caipirinha de Kiwi",
    description: "Cachaça, kiwi, açúcar e gelo.",
    price: "R$ 20,00",
    modalType: "simple"
  }
]

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
        price: "A partir de R$ 12,00",
        modalType: "simple"
    },
}

export const drinksProntos = [
  {
    title: "Copão Vodka",
    description: "700ml Vodka e energético.",
    price: "R$ 20,00",
    modalType: "simple"
  },
  {
    title: "Copão Whisky",
    description: "700ml Whisky e energético.",
    price: "R$ 25,00",
    modalType: "simple"
  },
  {
    title: "Copão Gin",
    description: "700ml Gin e água tônica.",
    price: "R$ 22,00",
    modalType: "simple"
  }
];
export const personalizaveis = [drinkTypes.caipirinha, drinkTypes.drinksProntos, caipirinhas ];