import { Flex, Text } from "@chakra-ui/react";
import { Link, LinkProps, useLocation } from "react-router-dom";

export const AppHeaderLink = ({ children, ...linkProps }: LinkProps & { to: string } ) => {

  const location = useLocation();
  const variant = location.pathname === linkProps.to ? "header_entry.selected" : "header_entry"

  return <Link {...linkProps}>
    <Text variant={variant}>{children}</Text>
  </Link>
}

export const AppHeader = () => {

  return <Flex justify="space-between" align="center" minH="5rem" padding="0 3rem" position="sticky">
    <Text variant="header_title" color="primary">
      TITOLO
    </Text>
    <Flex align="center" h="100%" gap="1rem">
    <AppHeaderLink to="/">HOMEPAGE</AppHeaderLink>
    <AppHeaderLink to="/about-us">CHI SIAMO</AppHeaderLink>
  </Flex></Flex>
}