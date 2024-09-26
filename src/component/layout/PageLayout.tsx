import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export const PageLayout = (flexProps:  FlexProps ) => {
    return <Flex padding="4rem 6rem" backgroundColor="primary" flex="1">
        <Flex w="100%" padding="2rem 3rem" backgroundColor="white" direction="column" {...flexProps}/>
    </Flex>
}