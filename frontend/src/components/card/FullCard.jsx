import { Button, Card } from "antd";

const FullCard = ({ data, onSelect }) => {
    return (
      <Card
        className="full-card full-card-bg"
        bodyStyle={{ padding: 0, background: "transparent" }}
        style={{ background: "transparent", boxShadow: "none", border: "none" }}
      >
        <div
          className="full-card-bg-image"
          style={{
            backgroundImage: `url(${data.img})`,
          }}
        />
        <div className="full-card-overlay" />
        <div className="full-card-content">
          <h2 className="full-card-title">{data.title}</h2>
          <p className="full-card-description">{data.description}</p>
          <div className="full-card-price">{data.price}</div>
          <Button
            type="primary"
            size="large"
            className="full-card-button"
            onClick={() => onSelect(data.modalType, data)}
          >
            Selecionar
          </Button>
        </div>
      </Card>
    );
};

export default FullCard;