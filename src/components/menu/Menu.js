import './Menu.css';

export function Menu() {

    return (
        <nav className="mobile-bottom-nav">
            <div className="item">
                <div className="item-content active">
                    <i className="fas fa-cocktail"></i>
                    Cocktail
                </div>
            </div>
            <div className="item">
                <div className="item-content">
                    <i className="fas fa-list-alt"></i>
                    Favorites
                </div>
            </div>
        </nav>
    )
}