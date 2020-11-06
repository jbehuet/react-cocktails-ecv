import { Link } from 'react-router-dom';
import './FavoritesList.css';

export function FavoritesList({ cocktails, onRemove }) {

    return (
        <ul className="favorites">
            {cocktails.map(cocktail =>
                <li key={cocktail.idDrink} className="favorites-item">
                    <Link to={`/cocktail/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
                    <span onClick={() => onRemove(cocktail)}><i className="fas fa-trash"></i></span>
                </li>
            )}
        </ul>
    )
}