import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AppHeader = () => {
 return <Flex justify="space-between" align="center" minH="5rem" padding="0 3rem" position="sticky">
 <Link to="/">
   HOMEPAGE
 </Link>
 </Flex>
}