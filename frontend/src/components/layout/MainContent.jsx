import DrinkCard from '../card/Card';
import FullCard from '../card/FullCard';
import { caicaraDrinks, caipirinhas, drinksProntos } from '../../data/Drinks';
import DrinksCarousel from '../carousel/Carousel';
import React, { useEffect, useRef } from 'react';

const getDrinksForTab = (tab) => {
  switch (tab) {
    case 'drinks':
      return drinksProntos;
    case 'caipirinhas':
      return caipirinhas;
    case 'caicara':
      return caicaraDrinks;
    default:
      return [];
  }
};

const MainContent = ({ activeTab, onOpenModal }) => {
  const drinks = getDrinksForTab(activeTab);
  const carouselRef = useRef(null);

  const useCarousel = activeTab === 'drinks' || activeTab === 'caipirinhas';

  useEffect(() => {
    const inst = carouselRef.current;
    if (inst && (inst.goTo || inst.slickGoTo)) {
      (inst.goTo || inst.slickGoTo).call(inst, 0, true);
    }
  }, [activeTab]);

  let content;
  if (!drinks.length) {
    content = <div>Selecione uma aba</div>;
  } else if (useCarousel) {
    content = (
      <section className="drinks-section">
        <h3 style={{ textAlign: "center" }}>
          {activeTab === "drinks" ? "Opções de Copão" : "Opções de Caipirinha"}
        </h3>
        <div className="drinks-carousel-wrapper">
          <DrinksCarousel ref={carouselRef}>
            {drinks.map((drink) => (
              <div key={drink.title} className="carousel-slide">
                <DrinkCard data={drink} onClick={onOpenModal} />
              </div>
            ))}
          </DrinksCarousel>
        </div>
      </section>
    );
  } else {
    content = (
      <div className="full-card-list">
        {drinks.map((drink) => (
          <div className="full-card-list-item" key={drink.title}>
            <FullCard data={drink} onSelect={onOpenModal} />
          </div>
        ))}
      </div>
    );
  }

  return <main className="main-content">{content}</main>;
};

export default MainContent;