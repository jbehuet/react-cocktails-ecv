import './Remove.css';

export function Remove({ onClick }) {
    return (
        <button className="remove" onClick={onClick}>
            <i className="fas fa-trash"></i>
        </button>
    )
}