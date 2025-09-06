import { Card, Select, Radio, Button, Divider } from 'antd';

/**
 * Componente para personalização de caipirinhas
 * Permite escolher base, frutas, recipiente e adicionais
 */
const CaipirinhaSel = ({ data }) => {
  return (
    <div className="caipirinha-customizer">
      <Card size="small" title="🍹 Personalize sua Caipirinha">
        
        {/* Seleção da Base */}
        <div className="selection-group">
          <h4>Base da Caipirinha:</h4>
          <Radio.Group defaultValue="cachaca">
            <Radio value="cachaca">Cachaça</Radio>
            <Radio value="vodka">Vodka</Radio>
            <Radio value="sake">Sakê</Radio>
          </Radio.Group>
        </div>

        <Divider />

        {/* Seleção da Fruta */}
        <div className="selection-group">
          <h4>Escolha a Fruta:</h4>
          <Select
            placeholder="Selecione uma fruta"
            style={{ width: '100%' }}
            options={[
              { value: 'limao', label: '🍋 Limão' },
              { value: 'morango', label: '🍓 Morango' },
              { value: 'kiwi', label: '🥝 Kiwi' },
              { value: 'abacaxi', label: '🍍 Abacaxi' },
            ]}
          />
        </div>

        <Divider />

        {/* Seleção do Recipiente */}
        <div className="selection-group">
          <h4>Recipiente:</h4>
          <Radio.Group defaultValue="copo">
            <Radio value="copo">🥃 Copo</Radio>
            <Radio value="taca">🍷 Taça</Radio>
          </Radio.Group>
        </div>

        <Divider />

        {/* Adicionais */}
        <div className="selection-group">
          <h4>Adicionais (opcional):</h4>
          <Select
            placeholder="Escolha um adicional"
            style={{ width: '100%' }}
            allowClear
            options={[
              { value: 'picole-frutas', label: '🍭 Picolé de Frutas Vermelhas' },
              { value: 'gelo-melancia', label: '🧊 Gelo de Melancia' },
              { value: 'canela', label: '🍂 Canela' },
            ]}
          />
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

export default CaipirinhaSel;
