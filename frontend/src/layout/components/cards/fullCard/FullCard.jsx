import { Button, Card, Descriptions, Typography, Row } from "antd";

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
              size="medium"
              className="full-card-descriptions"
            >
              <Descriptions.Item>
                {data.description}
              </Descriptions.Item>
            </Descriptions>

            <Row justify="center">
              <Typography.Title level={4} className="full-card-price" style={{ 
                color: "var(--price-text-color)", 
                 margin: 0,
                 padding: 4,
                }}>
                {data.price}
              </Typography.Title>
            </Row>

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