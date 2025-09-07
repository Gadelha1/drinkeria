import Navigation from "./Navigation";

const Header = ({ activeTab, onChange, tabsData }) => {
    return (
        <header className="main-header">
            {/* Seção Superior: Logo + Espaço para Carrinho */}
            <div className="header-top">
                <div className="logo-section">
                    <h1>Caiçara Headshop</h1>
                </div>
                <div className="cart-section">
                    {/* Espaço reservado para botão do carrinho */}
                </div>
            </div>
            
            {/* Seção Inferior: Navegação */}
            <Navigation 
                activeTab={activeTab}
                onChange={onChange}
                tabsData={tabsData}
            />
        </header>
    );
}

export default Header;
