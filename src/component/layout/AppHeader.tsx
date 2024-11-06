import { Button, Flex, Hide, Img, Show, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextVariants } from "styles/types/text.types"

import MenuIcon from "assets/icons/menu.svg"
import { AppColors, AppSpacings } from "styles/types/primitives.types";

const appHeaderEntries: { id: string, to: string, title: ReactNode }[] = [{
  id: "proj",
  to: "/projects",
  title: "PROGETTI"
}, {
  id: "about",
  to: "/about-us",
  title: "CHI SIAMO"
}]

export const AppHeaderLink = ({ children, to, onClick }: { to: string, children: ReactNode, onClick?: () => void }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentPath = location.pathname === to
  const variant = isCurrentPath ? TextVariants["Body/Large/Bold"] : TextVariants["Body/Large/Regular"]

  return <Text cursor={isCurrentPath ? undefined : "pointer"} variant={variant} onClick={() => {
    onClick?.();
    navigate(to);
  }}>
    {children}
  </Text>
}

export const AppHeader = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentPath = location.pathname === "/"

  const [isOpen, setOpen] = useState<boolean>(false);

  return <Flex justify="space-between" align="center" minH="5rem" padding={{ base: "0rem 2rem", sm: "0rem 6rem" }} bgColor={"white"}
    position={isOpen ? "sticky" : "relative"} top="0" w="100%" zIndex="1">

    <Text variant={TextVariants["Body/Large/Bold"]} color={AppColors["brand-medical-secondary"]} cursor={isCurrentPath ? undefined : "pointer"} onClick={() => {
      navigate("/");
    }}>
      TITOLO
    </Text>

    <Show above='lg'>
      <Flex align="center" h="100%" gap={AppSpacings[2]}>
        {appHeaderEntries.map(e =>
          <AppHeaderLink key={e.id} to={e.to}>
            {e.title}
          </AppHeaderLink>
        )}
      </Flex>
    </Show>

    <Hide above="lg">
      <Button w="3rem" h="3rem" p="0.5rem 0.5rem" onClick={() => setOpen(o => !o)}>
        <Img src={MenuIcon} />
      </Button>
      <Flex position="absolute" bottom="0" right="0" h="calc(100vh - 100%)"
        w={isOpen ? { base: "100vw", md: "40vw" } : 0} transform="translateY(100%)">
        <Flex bgColor={AppColors["brand-medical-green"]} gap={AppSpacings[2]} direction="column" padding="2rem 2rem" w="100%">
          {appHeaderEntries.map(e => <AppHeaderLink to={e.to} key={e.id} onClick={() => setOpen(false)}>
            {e.title}
          </AppHeaderLink>)}
        </Flex>
      </Flex>
    </Hide>
  </Flex>
}