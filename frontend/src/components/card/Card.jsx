import { Card } from 'antd';
const { Meta } = Card;

const DrinkCard = ({ data }) => (
  <Card
    hoverable
    className="drink-card"
    cover={
      <div className="drink-card__image-placeholder">
        {data.title}
      </div>
    }
    actions={[
      <div key="price" className="drink-card-price">
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