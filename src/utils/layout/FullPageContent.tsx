import { Flex, FlexProps } from "@chakra-ui/react";
import { AppSpacings } from "styles/types/primitives.types";

export const FullPageContent = (flexProps: FlexProps) => {
    return <Flex h="100%" w="100%" direction="column" align="center" justifyContent="center" gap={AppSpacings[4]} {...flexProps} />
}