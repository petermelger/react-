import {RecipeCard} from "./RecipeCard.jsx";
import {Flex} from "@chakra-ui/react";
import {data} from "../utils/data.js";

export const DefineCard = ({ setRecipe, useRecipes }) => {
    if (useRecipes && useRecipes.length > 0) {
        return (
            <Flex bgColor="#4f8bc9" flexWrap="wrap" justifyContent="space-evenly">
                {useRecipes.map((recipes) => (
                    <RecipeCard
                        key={recipes.recipe.label}
                        recipe={recipes}
                        setRecipe={setRecipe}
                    />
                ))}
            </Flex>
        );
    }
    else return (
        <Flex bgColor="#4f8bc9" flexWrap="wrap" justifyContent="space-evenly">
            {data.hits.map((recipes) => (
                <RecipeCard
                    key={recipes.recipe.label}
                    recipe={recipes}
                    setRecipe={setRecipe}
                />
            ))}
        </Flex>
    )
};