import { data } from "../utils/data";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { TextInput } from "./TextInput";
import { DefineCard } from "./DefineCard.jsx";

export const RecipeSearch = ({ setRecipe }) => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => setSearchField(event.target.value);


  const FoundRecipes = data.hits.filter((item) => {
      return item.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
          item.recipe.healthLabels.some(item => item.toLowerCase().includes(searchField.toLowerCase()));
  });

  return (
    <>
        <Flex flexDirection="column" backgroundColor={"#4f8bc9"}>
            <TextInput changeFn={handleChange}></TextInput>;
            <DefineCard useRecipes={FoundRecipes} setRecipe={setRecipe}></DefineCard>
        </Flex>
    </>
  );
};