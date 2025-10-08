import { Button, Card, Descriptions } from "antd";

const FullCard = ({ data, onSelect }) => {
    return (
      <Card
        className="full-card full-card-bg"
      >
        <div
          className="full-card-bg-image"
          style={{
            backgroundImage: `url(${data.img})`,
          }}
        />
        <div className="full-card-overlay" />
          <h2 className="full-card-title">{data.title}</h2>
          <div className="full-card-info">
            <Descriptions
              column={1}
              bordered={false}
              size="small"
              className="full-card-descriptions"
            >
              <Descriptions.Item>
                {data.description}
              </Descriptions.Item>
              <Descriptions.Item>
                <span className="full-card-price">{data.price}</span>
              </Descriptions.Item>
            </Descriptions>

            <Button
              type="primary"
              size="large"
              className="full-card-button"
              onClick={() => onSelect(data.modalType, data)}
            >
              Detalhes
            </Button>
          </div>
      </Card>
    );
};

export default FullCard;