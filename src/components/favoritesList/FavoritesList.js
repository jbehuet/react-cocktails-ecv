import { Link } from 'react-router-dom';
import './FavoritesList.css';

export function FavoritesList({ favorites, onRemove }) {

    return (
        <ul className="favorites">
            {favorites.map(favorite =>
                <li key={favorite.id} className="favorites-item">
                    <Link to={`/cocktail/${favorite.id}`}>{favorite.name}</Link>
                    <span onClick={() => onRemove(favorite)}><i className="fas fa-trash"></i></span>
                </li>
            )}
        </ul>
    )
}