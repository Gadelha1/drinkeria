import { Card, Select, Radio, Button, Divider, InputNumber } from 'antd';
import { useState } from 'react';

const Caipirinha = ({ data }) => {
  const [quantidade, setQuantidade] = useState(1);

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
            <Radio value="gin">Gin</Radio>
          </Radio.Group>
        </div>

        <Divider />

        <div className="selection-group-selects">
          <h4>Escolha a Fruta:</h4>
          <Select
            placeholder="Selecione uma fruta"
            style={{ width: '50%' }}
            options={[
              { value: 'limao', label: '🍋 Limão' },
              { value: 'morango', label: '🍓 Morango' },
              { value: 'kiwi', label: '🥝 Kiwi' },
              { value: 'abacaxi', label: '🍍 Abacaxi' },
            ]}
          />
        </div>

        {/* Adicionais */}
        <div className="selection-group-selects">
          <h4>Adicionais(opcional):</h4>
          <Select
            placeholder="Escolha um adicional"
            style={{ width: '50%' }}
            allowClear
            options={[
              { value: 'picole', label: '🍭 Picolé de Frutas Vermelhas' },
              { value: 'hortela', label: '🍂 Hortelã' },
            ]}
          />
        </div>
        
        <div className='selection-group-horizontal'>
          <h4>Quantidade:</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button
              size="small"
              onClick={() => setQuantidade(prev => Math.max(1, 
                prev - 1))}
              disabled={quantidade <= 1}
            >
              -
            </Button>
            <InputNumber
              min={1}
              max={10}
              value={quantidade}
              onChange={setQuantidade}
              controls={false}
              className="centered-input"
            />

            <Button 
              size="small" 
              onClick={() => setQuantidade(prev => Math.min(10, prev + 1))}
              disabled={quantidade >= 10}
            >
              +
            </Button>

          </div>
        </div>

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

export default Caipirinha;
