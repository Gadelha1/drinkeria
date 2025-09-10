import { Button, Card } from "antd";

const FullCard = ({ data, onSelect }) => {
    return (
    <Card
        className="full-card"
        cover={
            <div className="full-card-image">
                <img
                    src="https://via.placeholder.com/400x300"
                    alt={data.title}
                    className="full-card-img" 
                />
            </div>
        }
        >
            <h2 className="full-card-title">{data.title}</h2>
            <p className="full-card-description">{data.description}</p>
            <div className="full-card-price">R$ {data.price}</div>

            <Button 
                type="primary"
                size="large"
                className="full-card-button"
                onClick={() => onSelect(data.modalType, data)}
            >
                Selecionar
            </Button>
        </Card>
    );
}

export default FullCard;