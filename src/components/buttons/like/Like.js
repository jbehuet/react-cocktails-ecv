import './Like.css';

export function Like({ onClick }) {
    return (
        <button className="like" onClick={onClick}>
            <i className="fas fa-heart"></i>
        </button>
    )
}