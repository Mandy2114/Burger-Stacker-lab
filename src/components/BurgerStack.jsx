import Ingredient from "./Ingredient.jsx";

const BurgerStack = (props) => {
  if (!props.stack.length)
    return (
      <ul>
        <li>No Ingredient</li>
      </ul>
    );
  
  return (
    <ul>
      {props.stack.map((ingredient, index) => ( // implicit return (parentheis) vs. explicit (curly braces)
        <Ingredient
          key={index}
          index={index}
          ingredient={ingredient}
          removeFromBurger={props.removeFromBurger}
        />
      ))}
    </ul>
  );
};

export default BurgerStack