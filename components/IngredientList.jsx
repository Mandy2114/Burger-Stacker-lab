

export const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, index) => (
        <IngredientList
          key={index}
          ingredient={ingredient}
          addToburger={props.addToburger}
        />
      ))};
    </ul>
  );
};