import { Button, Card, Checkbox, Divider, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleIngrediente, setAdicionalHortela, setQuantidade, resetCaicara } from "../../../store/CaicaraSlice";
import { useEffect } from "react";

const CaicaraModal = ({ data }) => {
  const dispatch = useDispatch();
  const { removidos, adicionalHortela, quantidade } = useSelector(state => state.caicara);

  const ingredientesFixos = data.ingredientes || [
    'Cachaça', 'Limão', 'Açúcar', 'Gelo'
  ];

  // Resetar estado ao abrir o modal
  useEffect(() => {
    dispatch(resetCaicara());
  }, [dispatch, data]);

  return (
    <div className="caicara-customizer">
      <Card size="small" title="🌴 Personalize seu Drink Caiçara">
        <div className="selection-group">
          <h4>Ingredientes:</h4>
          <Checkbox.Group
            value={ingredientesFixos.filter(i => !removidos.includes(i))}
            onChange={checkedList => {
              ingredientesFixos.forEach(i => {
                if (removidos.includes(i) && checkedList.includes(i)) {
                  dispatch(toggleIngrediente(i));
                }
                if (!removidos.includes(i) && !checkedList.includes(i)) {
                  dispatch(toggleIngrediente(i));
                }
              });
            }}
          >
            {ingredientesFixos.map(ingrediente => (
              <Checkbox
                key={ingrediente}
                value={ingrediente}
                checked={!removidos.includes(ingrediente)}
                onChange={() => dispatch(toggleIngrediente(ingrediente))}
              >
                {ingrediente}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </div>

        <Divider />

        <div className="selection-group">
          <h4>Adicionais:</h4>
          <Checkbox
            checked={adicionalHortela}
            onChange={e => dispatch(setAdicionalHortela(e.target.checked))}
          >
            🍃 Hortelã
          </Checkbox>
        </div>

        <Divider />

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

export default CaicaraModal;