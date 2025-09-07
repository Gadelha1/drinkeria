import DrinkCard from '../card/drinkCard';
import { drinkTypes } from '../../data/drinks';

const MainContent = ({ activeTab, onOpenModal }) => {
  
  const renderContent = () => {
    switch(activeTab) {
      case 'drinks':
        return (
          <div className='drinks-grid'>
            <DrinkCard 
              data={drinkTypes.caicara} 
              onClick={onOpenModal} 
            />
          </div>
        );
      case 'caipirinhas':
        return (
          <div className='drinks-grid'>
            <DrinkCard 
              data={drinkTypes.caipirinha} 
              onClick={onOpenModal} 
            />
          </div>
        );
      case 'caicara':
        return (
          <div className='drinks-grid'>
            <DrinkCard 
              data={drinkTypes.caipirinha} 
              onClick={onOpenModal} 
            />
            <DrinkCard 
              data={drinkTypes.caicara} 
              onClick={onOpenModal} 
            />
          </div>
        );
      default:
        return <div>Selecione uma aba</div>;
    }
  };

  return (
    <main className="main-content">
      {renderContent()}
    </main>
  );
};

export default MainContent;
