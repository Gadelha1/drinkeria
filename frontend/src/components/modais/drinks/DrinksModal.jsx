import { Card, Radio, Button, Divider } from 'antd';

/**
 * Componente para drinks prontos
 * Permite apenas escolher o recipiente
 */
const DrinkPronto = ({ data }) => {
  return (
    <div className="ready-drink-selector">
      <Card size="small" title="🍸 Drink Pronto">
        
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>

        <Divider />

        {/* Seleção do Recipiente */}
        <div className="selection-group">
          <h4>Escolha o Recipiente:</h4>
          <Radio.Group defaultValue="copo">
            <Radio value="copo">🥃 Copo</Radio>
            <Radio value="taca">🍷 Taça</Radio>
          </Radio.Group>
        </div>

        <Divider />

        <div style={{ textAlign: 'center' }}>
          <h3>Total: {data.price}</h3>
          <Button type="primary" size="large">
            Adicionar ao Pedido
          </Button>
        </div>

      </Card>
    </div>
  );
};

export default DrinkPronto;
