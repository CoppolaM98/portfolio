import { Flex, FlexProps } from "@chakra-ui/react";

export const FullPageContent = (flexProps: FlexProps) => {
    return <Flex h="100%" w="100%" direction="column" align="center" justifyContent="center" gap="2rem" {...flexProps} />
}