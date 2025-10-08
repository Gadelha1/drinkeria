import React, { useEffect, useRef } from 'react';
import { Carousel, Row, Col, Typography } from 'antd';
import DrinkCard from '../card/Card';
import FullCard from '../card/FullCard';
import { caicaraDrinks, caipirinhas, drinksProntos } from '../../../data/Drinks';

const { Title } = Typography;

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
  const drinksSlideRef = useRef(0);
  const caipirinhasSlideRef = useRef(0);

  const useCarousel = activeTab === 'drinks' || activeTab === 'caipirinhas';
  const prevUseCarouselRef = useRef(useCarousel);

  useEffect(() => {
    const inst = carouselRef.current;
    if (useCarousel && !prevUseCarouselRef.current) {
      if (activeTab === 'drinks') drinksSlideRef.current = 0;
      if (activeTab === 'caipirinhas') caipirinhasSlideRef.current = 0;

      if (inst && (inst.goTo || inst.slickGoTo)) {
        setTimeout(() => {
          (inst.goTo || inst.slickGoTo).call(inst, 0, true);
        }, 0);
      }
    }
    prevUseCarouselRef.current = useCarousel;
  }, [useCarousel, activeTab]);

  const initialSlideForActive = () => {
    if (activeTab === 'drinks') return drinksSlideRef.current || 0;
    if (activeTab === 'caipirinhas') return caipirinhasSlideRef.current || 0;
    return 0;
  };

  let content;
  if (!drinks.length) {
    content = <div>Selecione uma aba</div>;
  } else if (useCarousel) {
    content = (
      <div className="drinks-section">
        <Row justify="center">
          <Col xs={24} sm={20} md={18} lg={14}>
            <Title level={4} style={{ margin: '16px 0' }}>
              {activeTab === 'drinks' ? 'Opções de Copão' : 'Opções de Caipirinha'}
            </Title>

            <Carousel
              key={`carousel-${activeTab}`}
              ref={carouselRef}
              dots
              arrows
              infinite={false}
              slidesToShow={1}
              slidesToScroll={1}
              className="drinks-carousel"
              initialSlide={initialSlideForActive()}
              afterChange={(current) => {
                if (activeTab === 'drinks') drinksSlideRef.current = current;
                if (activeTab === 'caipirinhas') caipirinhasSlideRef.current = current;
              }}
            >
              {drinks.map((drink) => (
                <div key={`${activeTab}-${drink.title}`} className="carousel-slide">
                  <Row justify="center">
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                      <DrinkCard data={drink} onClick={onOpenModal} />
                    </Col>
                  </Row>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  } else {
    content = (
      <Row justify="center" gutter={[24, 24]}>
        {drinks.map((drink) => (
          <Col key={drink.title} xs={24} sm={20} md={18} lg={16}>
            <div className="full-card-list-item">
              <FullCard data={drink} onSelect={onOpenModal} />
            </div>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <main className="main-content">
      <div className={`full-card-list ${activeTab === 'caicara' ? 'scrollable' : ''}`}>{content}</div>
    </main>
  );
};

export default MainContent;