import Ingredient from './Ingredient.jsx'

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          addToBurger={props.addToBurger}
        />
      ))};
    </ul>
  );
};

export default IngredientList