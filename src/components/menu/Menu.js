import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ApplicationContext } from '../../domain/application.store';
import { authLogout } from '../../domain/authentication/authentication.actions';
import './Menu.css';

export function Menu() {
    const { state, dispatch } = useContext(ApplicationContext);
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        authLogout(dispatch);
        history.push('/login');
    }

    if (!state.isLoggedIn) return null
    return (
        <nav className="mobile-bottom-nav">
            <div className="item" onClick={() => history.push('/')}>
                <div className={`item-content ${(location.pathname === '/' || location.pathname.indexOf('/cocktail/') === 0) && 'active'}`}>
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
            <div className="item" onClick={logout}>
                <div className={`item-content`}>
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                </div>
            </div>
        </nav>
    )
}