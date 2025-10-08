import { Card, Image } from 'antd';
const { Meta } = Card;

const DrinkCard = ({ data }) => (
  <Card
    hoverable
    className="drink-card"
    cover={
      <Image
        src={data.img}
        alt={data.title}
        preview={false}
        className='drink-card-image'
        style={{ objectFit: 'cover', height: 400 }}
      />
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