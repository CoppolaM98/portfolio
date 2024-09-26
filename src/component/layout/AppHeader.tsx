import { Button, Flex, Hide, Img, Show, Text } from "@chakra-ui/react";
import burgerIcon from "assets/icons/burger.svg";
import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextVariants } from "styles/chakra/Text";

const appHeaderEntries: { to: string, title: ReactNode }[] = [{
  to: "/",
  title: "HOMEPAGE"
}, {
  to: "/about-us",
  title: "CHI SIAMO"
}]

export const AppHeaderLink = ({ children, to, onClick }: { to: string, children: ReactNode, onClick?: () => void }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentPath = location.pathname === to
  const variant = isCurrentPath ? TextVariants["header_entry.selected"] : TextVariants.header_entry

  return <Text cursor={isCurrentPath ? undefined : "pointer"} variant={variant} onClick={() => {
    onClick?.();
    navigate(to);
  }}>
    {children}
  </Text>
}

export const AppHeader = () => {

  const [isOpen, setOpen] = useState<boolean>(false);

  return <Flex justify="space-between" align="center" minH="5rem" padding="0 3rem" bgColor="white"
    position={isOpen ? "sticky" : "relative"} top="0" w="100%" zIndex="1">

    <Text variant={TextVariants.header_title} color="primary">
      TITOLO
    </Text>

    <Show above='lg'>
      <Flex align="center" h="100%" gap="1rem">
        {appHeaderEntries.map(e =>
          <AppHeaderLink to={e.to}>
            {e.title}
          </AppHeaderLink>
        )}
      </Flex>
    </Show>

    <Hide above="lg">
      <Button w="3rem" h="3rem" p="0.5rem 0.5rem" onClick={() => setOpen(o => !o)}>
        <Img src={burgerIcon} />
      </Button>
      <Flex position="absolute" bottom="0" right="0" h="calc(100vh - 100%)"
        w={isOpen ? { base: "100vw", md: "40vw" } : 0} transform="translateY(100%)">
        <Flex bgColor="secondary" gap="1rem" direction="column" padding="2rem 2rem" w="100%">
          {appHeaderEntries.map(e => <AppHeaderLink to={e.to} onClick={() => setOpen(false)}>
            {e.title}
          </AppHeaderLink>)}
        </Flex>
      </Flex>
    </Hide>
  </Flex>
}