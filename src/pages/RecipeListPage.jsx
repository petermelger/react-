import { Center, Heading } from '@chakra-ui/react';
import { RecipeSearch } from "../components/RecipeSearch.jsx";


export const RecipeListPage = ({ setRecipe }) => {
  return (
    <>
      <Heading p={5} bgColor="#4f8bc9" color="white">
        <Center>Winc Recipe Checker</Center>
      </Heading>
        <RecipeSearch setRecipe={setRecipe}  />
    </>
  );
};
