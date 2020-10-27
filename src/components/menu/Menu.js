import { useHistory, useLocation } from 'react-router-dom';
import './Menu.css';

export function Menu() {
    const history = useHistory();
    const location = useLocation();
    
    return (
        <nav className="mobile-bottom-nav">
            <div className="item" onClick={() => history.push('/')}>
                <div className={`item-content ${location.pathname === '/' && 'active'}`}>
                    <i className="fas fa-cocktail"></i>
                    Cocktail
                </div>
            </div>
            <div className="item" onClick={() => history.push('/favorites')}>
                <div className={`item-content ${location.pathname === '/favorites' && 'active'}`}>
                    <i className="fas fa-list-alt"></i>
                    Favorites
                </div>
            </div>
        </nav>
    )
}