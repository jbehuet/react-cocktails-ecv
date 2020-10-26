import './Refresh.css';

export function Refresh({ onClick }) {
    return (
        <button className="refresh" onClick={onClick}>
            <i className="fas fa-redo-alt"></i>
        </button>
    )
}