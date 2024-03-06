import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <>
      <Input
          height={"3rem"}
          width={"30rem"}
          margin="auto"
          onChange={changeFn} {...props}
          borderRadius={"10px"}
          backgroundColor={"white"}
          placeholder={"Search or Filter for Recipies"}
          textAlign={"center"}
      ></Input>
    </>
  );
};