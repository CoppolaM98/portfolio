import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AppHeader = () => {
 return <Flex pt="8" justify="space-between" align="center" minH="110px">
 <Link to="/">
   HOMEPAGE
 </Link>
 </Flex>
}