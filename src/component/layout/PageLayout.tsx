import { Flex, FlexProps } from "@chakra-ui/react";
import { AppColors, AppSpacings } from "styles/types/primitives.types";

export const PageLayout = (flexProps: FlexProps) => {
    return <Flex padding={{base: "3rem 2rem", sm: "4rem 6rem"}} backgroundColor={AppColors["brand-medical-green"]} flex="1">
        <Flex w="100%" padding={{base: "1.5rem 1rem", sm: "2rem 3rem"}} backgroundColor={"white"} direction="column" gap={AppSpacings[2]} {...flexProps} />
    </Flex>
}