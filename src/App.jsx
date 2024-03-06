import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeItemPage } from "./pages/RecipeItemPage.jsx";
import { useState } from "react";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      {selectedItem ? (
        <RecipeItemPage recipe={selectedItem} backBtn={setSelectedItem} />
      ) : (
        <RecipeListPage setRecipe={setSelectedItem} />
      )}
    </>
  );
};
