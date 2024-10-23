const Ingredient = (props) => {
  return (
    <li style={{ backgroundColor: props.ingredient.color }}>
      {props.ingredient.name}
      {props.addToBurger
        ? <button onClick={() => props.addToBurger(props.ingredient)}>+</button>
        : <button onClick={() => props.removeFromBurger(props.index)}>x</button>
      }
    </li>
  );
};

export default Ingredient;