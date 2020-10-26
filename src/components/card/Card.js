import { LikeButton, RefreshButton } from '../buttons';
import { Loader } from '../loader/Loader';
import './Card.css';

const STR_INGREDIENT = "strIngredient";

export function Card({ cocktail, onLike, onRetry, isLoading }) {
    console.log(cocktail);

    const getIngredients = () => {
        return Object.keys(cocktail)
            .filter(key => key.startsWith(STR_INGREDIENT))
            .filter(key => !!cocktail[key])
            .map((key) => {
                const idx = key.split(STR_INGREDIENT)[1];
                return {
                    ingredient: cocktail[key],
                    measure: cocktail[`strMeasure${idx}`] ? cocktail[`strMeasure${idx}`] : ''
                }
            })
    }

    return (
        <div className="card">
            <div className="card-header">
                {!isLoading && <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />}
            </div>

            <div className="card-body">
                <div className="text">
                    {isLoading ?
                        <Loader />
                        :
                        <>
                            <h1>{cocktail.strDrink}</h1>
                            <span className="badge">{cocktail.strCategory}</span>
                            <div className="soft">{cocktail.strAlcoholic !== 'Alcoholic' && "SOFT"}</div>
                            <ul className="ingredients-list">
                                {getIngredients().map(i =>
                                    <li key={i.ingredient}>{`${i.measure} ${i.ingredient}`}</li>
                                )}
                            </ul>
                        </>
                    }
                </div>
            </div>
            <LikeButton onClick={() => onLike(cocktail)} />
            <RefreshButton onClick={onRetry} />
        </div>
    )

}