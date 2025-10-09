import { Button, Card, Checkbox, Divider, InputNumber, Layout, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleIngrediente, resetCaicara } from "../../../../store/CaicaraSlice";
import { useEffect } from "react";

const CaicaraModal = ({ data }) => {
  const dispatch = useDispatch();
  const { removidos } = useSelector(state => state.caicara);

  const ingredientesFixos = data.ingredientes || [
    'Cachaça', 'Limão', 'Açúcar', 'Gelo'
  ];

  useEffect(() => {
    dispatch(resetCaicara());
  }, [dispatch, data]);

  return (
      <Card 
        size="small" 
        title="🌴 Remova ingredientes se preferir 🌴"
        style={{ 
          textAlign: 'center'
        }}
        >
        <Layout
          style={{
            background: 'transparent',
            border: 'none',
            padding: 2,
            }}>
          <Typography.Text
            strong
          >
            Ingredientes:
          </Typography.Text>
          <Checkbox.Group
            value={ingredientesFixos.filter(i => !removidos.includes(i))}
            onChange={checkedList => {
              ingredientesFixos.forEach(i => {
                const currentlyChecked = !removidos.includes(i);
                const willBeChecked = checkedList.includes(i);
                if (currentlyChecked && !willBeChecked) {
                  dispatch(toggleIngrediente(i));
                } else if (!currentlyChecked && willBeChecked) {
                  dispatch(toggleIngrediente(i));
                }
              });
            }}
          >
            {ingredientesFixos.map(ingrediente => (
              <Checkbox
                key={ingrediente}
                value={ingrediente}
              >
                {ingrediente}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Layout>

        <Divider />

        {/* <div className="selection-group">
          <h4>Adicionais:</h4>
          <Checkbox
            checked={adicionalHortela}
            onChange={e => dispatch(setAdicionalHortela(e.target.checked))}
          >
            🍃 Hortelã
          </Checkbox>
        </div> */}

        {/* <Divider />

        <div className="selection-group-horizontal">
          <h4>Quantidade:</h4>
          <Button
            size="small"
            onClick={() => dispatch(setQuantidade(Math.max(1, quantidade - 1)))}
            disabled={quantidade <= 1}
          >
            -
          </Button>
          
          <InputNumber
            min={1}
            max={10}
            value={quantidade}
            onChange={value => dispatch(setQuantidade(value))}
            controls={false}
            className="centered-input"
          />
          <Button
            size="small"
            onClick={() => dispatch(setQuantidade(Math.min(10, quantidade + 1)))}
            disabled={quantidade >= 10}
          >
            +
          </Button>
        </div> */}

        <Layout 
          style={{ 
            textAlign: 'center',
            background: 'transparent',
            height: 20,
            justifyContent: 'center',
            
            }}>
          <Typography.Title 
            level={4}
            strong
            style={{ marginTop: 0 }}
          >
            Total: {data.price}
          </Typography.Title>
          {/* <Button type="primary" size="large">
            Adicionar ao Pedido
          </Button> */}
        </Layout>
      </Card>
  );
};

export default CaicaraModal;