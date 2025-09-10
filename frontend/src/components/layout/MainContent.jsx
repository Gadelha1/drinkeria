import DrinkCard from '../card/Card';
import FullCard from '../card/FullCard';
import { drinkTypes } from '../../data/Drinks';

const getDrinksForTab = (tab) => {
  switch(tab) {
    case 'drinks':
      return [drinkTypes.drinksProntos];
    case 'caipirinhas':
      return [drinkTypes.caipirinha];
    case 'caicara':
      return [drinkTypes.caicara];
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
      <div className={containerClass}>
        {drinks.map((drink) => (
          <div
            className={activeTab === 'drinks' ? '' : 'full-card-list-item'}
            key={drink.title}
          >
            {/* Usa DrinkCard para drinks prontos, FullCard para os outros */}
            {activeTab === 'drinks' ? (
              <DrinkCard data={drink} onClick={onOpenModal} />
            ) : (
              <FullCard data={drink} onSelect={onOpenModal} />
            )}
          </div>
        ))}
      </div>
      
    </main>
  );
};
export default MainContent;