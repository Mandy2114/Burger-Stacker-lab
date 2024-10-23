

export const BurgerStack = (props) => {
  if (!props.stack.length)
    return (
      <ul>
        <li>No Ingredient</li>
      </ul>
    );
  
  return (
    <ul>
      {props.stack.map((ingredient, index) => {
        <ingredient
          key={index}
          index={index}
          ingredient={ingredient}
          removeFromBurger={props.removeFromBurger}
        />
      })}
    </ul>
  );
};