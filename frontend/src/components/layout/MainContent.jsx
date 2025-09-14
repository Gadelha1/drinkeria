import DrinkCard from '../card/Card';
import FullCard from '../card/FullCard';
import { caicaraDrinks, drinksProntos, drinkTypes } from '../../data/Drinks';
import DrinksCarousel from '../carousel/Carousel';


const getDrinksForTab = (tab) => {
  switch(tab) {
    case 'drinks':
      return drinksProntos;
    case 'caipirinhas':
      return [drinkTypes.caipirinha];
    case 'caicara':
      return caicaraDrinks;
    default:
      return [];
  }
};

const MainContent = ({ activeTab, onOpenModal }) => {
  const drinks = getDrinksForTab(activeTab);

  if (!drinks.length) {
    return <main className="main-content">Selecione uma aba</main>;
  }

  // Decide a classe do container conforme o tipo de aba
  const containerClass = activeTab === 'drinks' ? 'drinks-grid' : 'full-card-list';

  return (
    <main className="main-content">
      {activeTab === 'drinks' ? (
        <section className="drinks-section">
          <h3>Opções de Copão</h3>
          <div className="drinks-carousel-wrapper">
            <DrinksCarousel>
              {drinksProntos.map((drink) => (
                <div key={drink.title} className="carousel-slide">
                    <DrinkCard data={drink} onClick={onOpenModal} />
                  </div>
                
              ))}
            </DrinksCarousel>
          </div>
        </section>
      ) : (
        <div className={containerClass}>
          {drinks.map((drink) => (
            <div
              className={activeTab === 'drinks' ? '' : 'full-card-list-item'}
              key={drink.title}
            >
              <FullCard data={drink} onSelect={onOpenModal} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
export default MainContent;