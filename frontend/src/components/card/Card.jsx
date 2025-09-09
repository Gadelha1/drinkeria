import { Card } from 'antd';
const { Meta } = Card;

const DrinkCard = ({ data, onClick }) => (
  <Card
    hoverable
    className="drink-card"
    onClick={() => onClick(data.modalType, data)}
    cover={
      <div className="drink-card__image-placeholder">
        {data.title}
      </div>
    }
    actions={[
      <div key="price" className="drink-card__price">
        {data.price}
      </div>
    ]}
  >
    <Meta
      title={data.title}
      description={data.description}
    />
  </Card>
);

export default DrinkCard;