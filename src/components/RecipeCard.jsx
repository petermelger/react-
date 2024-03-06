import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";

export const RecipeCard = function ({ recipe, setRecipe }) {
  const filterHealthLabels = recipe.recipe.healthLabels.filter((item) => {
    return item === "Vegan" || item === "Vegetarian";
  });
  return (
    <Card
      onClick={() => setRecipe(recipe)}
      m={5}
      width="20rem"
      height="30rem"
      cursor="pointer"
      bgColor="green.50"
      borderStyle="solid"
      borderRadius="25px"
      boxShadow="0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
      variant="outline"
      alignItems="center"
      textAlign="center"
      fontFamily={"Arial Black, sans-serif"}
    >
      <Image
          src={recipe.recipe.image}
          margin="auto"
          height="12.5rem"
          width="23rem"
          objectFit="cover"
          borderTopRadius="25px"
          borderStyle="solid"
          alt="Picture of recipe"
          variant={"outline"}
        />
      <CardHeader pb={0}>
        <Text fontSize="15px" textStyle={"bold"} textColor={"gray.400"}>
          {recipe.recipe.mealType[0]}
        </Text>
        <Text fontSize="18px">
          {recipe.recipe.label}
        </Text>
      </CardHeader>
      <CardBody pt={3}>
        <Flex justify="space-evenly" wrap="wrap" fontSize="15px">
          {filterHealthLabels.map((filteredItem) => (
            <Text
              bgColor="green.300"
              mt={2}
              pl={1.5}
              pr={1.5}
              borderRadius="5px"
              key={filteredItem}
              m={1}
            >
              {filteredItem}
            </Text>
          ))}
        </Flex>
        <Flex justify="space-evenly" wrap="wrap" fontSize="15px">
          {recipe.recipe.dietLabels.map((item) => (
            <Text
              bgColor="blue.300"
              mt={2}
              pl={1.5}
              pr={1.5}
              borderRadius="5px"
              key={item}
              m={1}
            >
              {item}
            </Text>
          ))}
        </Flex>
        <Text fontSize="15px">
          Dish: {recipe.recipe.dishType[0]}
        </Text>
        <Text fontSize="15px">
          Cautions:
        </Text>
        <Flex justify="space-evenly" wrap="wrap" fontSize="15px">
          {recipe.recipe.cautions.map((item) => (
            <Text
              bgColor="red.300"
              pl={1.5}
              pr={1.5}
              borderRadius="5px"
              m={1}
              key={item}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};