import {
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

export const RecipeItemPage = ({ recipe, backBtn }) => {
  return (
    <>
      <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 30rem 30rem 1fr",
          }}
          justifyItems="start"
          justifyContent="center"
          bg="#4f8bc9"
          fontFamily={"Arial Black, sans-serif"}
      >
        <GridItem
            p={5}
            w="auto"
            bg="#4f8bc9"
            colStart={{ lg: "2" }}
            colEnd={{ lg: "3" }}
            height={"auto"}
        >
          <Flex justify="space-between" alignItems="center">
            <Button
                onClick={() => backBtn()}
                size="sm"
                mt={2}
                mb={2}
                mr={2}
                bg="white"
                color="black"
            >
              Return
            </Button>
            <Heading
                fontSize={"20px"}
                color="white"
                textAlign="center"
                m="auto"
                pb={2}
            >
              {recipe.recipe.label}
            </Heading>
          </Flex>
          <Flex flexDir={"column"}
                textAlign={"center"}
                backgroundColor={"white"}
                borderRadius={"25px"}
                borderStyle={"solid"}
                boxShadow="0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
                variant={"outline"}
                height={"auto"}
          >
            <Image
                width="full"
                height="20em"
                objectFit="cover"
                borderTopRadius="25px"
                src={recipe.recipe.image}
                alt="picture of recipe"
            />
            <Text mt={2}
                  mb={2}
                  decoration="underline"
                  textTransform="uppercase"
                  style={{fontWeight: 'bold'}}
                  justifyItems={"center"}>
              {recipe.recipe.dishType[0]}
            </Text>
            <Text
                style={{fontWeight: 'bold'}}
            >Total Cooking Time: {recipe.recipe.totalTime} minutes</Text>
            <Text
                mb={3}
                style={{fontWeight: 'bold'}}
            >Servings: {recipe.recipe.yield}</Text>
            <Heading mb={2} fontSize="sm">
              Ingredients:
            </Heading>
            {recipe.recipe.ingredientLines.map((item) => (
                <Text style={{fontWeight: 'bold'}} key={item} mb={2}>{item}</Text>
            ))}
          </Flex>
        </GridItem>
        <GridItem p={5} w="auto"
                  paddingTop={5}
                  bg="#4f8bc9"
        >
          <Heading mb={4} fontSize="20px" color="white">
            Health labels:
          </Heading>
          <Flex justify="flex-start" wrap="wrap" fontSize="15px" style={{fontWeight: 'bold'}}>
            {recipe.recipe.healthLabels.map((item) => (
              <Text
                  cursor="pointer"
                  bgColor="green.400"
                  color={"white"}
                  mb={3}
                  mr={3}
                  pl={1.5}
                  pr={1.5}
                  borderRadius="5px"
                  key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Heading mb={3} fontSize="20px" color={"white"}>
            Diet:
          </Heading>
          <Flex justify="flex-start" wrap="wrap" borderRadius="15px">
            {recipe.recipe.dietLabels.map((item) => (
              <Text
                bgColor="blue.400"
                mb={3}
                mr={3}
                pl={1.5}
                pr={1.5}
                color={"white"}
                style={{fontWeight: 'bold'}}
                borderRadius="5px"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>
          <Heading mb={3} fontSize="20px" color={"white"}>
            Cautions:
          </Heading>
          <Flex justify="flex-start" wrap="wrap" fontSize="15px">
            {recipe.recipe.cautions.map((item) => (
              <Text
                bgColor="red.400"
                color={"white"}
                style={{fontWeight: 'bold'}}
                mb={3}
                mr={3}
                pl={1.5}
                pr={1.5}
                borderRadius="5px"
                key={item}
              >
                {item}
              </Text>
            ))}
          </Flex>

          <Heading mb={3} fontSize="20px" color={"white"}>
            Total nutrients:
          </Heading>
          <Flex wrap="wrap"
                borderRadius={"5px"}
                style={{fontWeight: 'bold'}}
                color={"black"}
                backgroundColor={"white"} justify="center">
            <Text mr={3}>
              Calories:{" "}
              {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "} kcal
            </Text>
            <Text mr={3}>
              Protein:{" "}
              {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g
            </Text>
            <Text mr={3}>
              Fat: {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} g
            </Text>
            <Text mr={3}>
              Carbs: {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}{" "} g
            </Text>
            <Text mr={3}>
              Cholesterol:{" "}
              {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} mg
            </Text>
            <Text mr={3}>
              Sodium: {Math.round(recipe.recipe.totalNutrients.NA.quantity)} mg
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};