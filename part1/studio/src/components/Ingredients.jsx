import styles from './Ingredients.module.css';

export default function Ingredients() {
    let ingredients = ['shredded chicken', 
    'shredded pepper jack cheese', 
    'black beans', 'salsa', 'flour tortillas', 'oil'];

    return (
      <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
        </ul>
      </div>  
    )
}